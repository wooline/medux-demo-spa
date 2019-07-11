import {ActionTypes, BaseModelHandlers, effect} from '@medux/react-web-router';
import {ItemCreateData, ItemDetail, ListItem, ListSearch, ListSummary} from 'entity/comment';

import {BaseModelState} from '@medux/react-web-router/types/export';
import {ModuleNames} from 'modules/names';
import {RootState} from 'modules';
import {Toast} from 'antd-mobile';
import api from './api';
import {simpleEqual} from 'common/utils';

// 定义本模块的路由参数类型
export interface RouteParams {
  itemId: string;
  detailKey: string;
  listKey: string;
  listSearch: ListSearch;
}

// 定义本模块的State类型
export interface State extends BaseModelState<RouteParams> {
  listSearch?: ListSearch;
  listItems?: ListItem[];
  listSummary?: ListSummary;
  itemDetail?: ItemDetail;
  listKey?: string;
  detailKey?: string;
}

// 定义本模块State的初始值
export const initModelState: State = {
  routeParams: {
    detailKey: '',
    listKey: '',
    itemId: '',
    listSearch: {
      articleType: 'photo',
      articleId: '',
      isNewest: false,
      page: 1,
      pageSize: 10,
    },
  },
};

export class ModelHandlers extends BaseModelHandlers<State, RootState> {
  @effect()
  public async searchList(options: Partial<ListSearch> = {}) {
    const listSearch: ListSearch = {...this.state.listSearch!, ...options};
    const {listItems, listSummary} = await api.searchList(listSearch);
    const listKey = this.state.routeParams!.listKey;
    this.updateState({listSearch, listItems, listSummary, listKey});
  }
  @effect()
  public async getItemDetail(itemId: string) {
    const itemDetail = await api.getItemDetail(itemId);
    const detailKey = this.state.routeParams!.detailKey;
    this.updateState({itemDetail, detailKey});
  }

  @effect()
  public async createItem(data: ItemCreateData) {
    const response = await api.createItem(data);
    if (!response.error) {
      Toast.info('操作成功');
      // 如果创建成功，要让用户看到自已发表的评论，必须刷新列表，以创建时间排序
      const routeData = this.rootState.route.data;
      const views = routeData.views;
      if (views.comments && views.comments.List) {
        await this.dispatch(this.actions.searchList({isNewest: true, page: 1}));
      } else if (views.comments && views.comments.Details) {
        await this.dispatch(this.actions.getItemDetail(this.state.itemDetail!.id));
      }
    } else {
      Toast.info(response.error.message);
    }
  }

  // 同时监听初始化INIT和路由变化的action
  // 参数 null 表示不需要监控loading状态，searchList时会监控loading
  @effect(null)
  protected async [`${ModuleNames.comments}/${ActionTypes.M_INIT},${ActionTypes.F_ROUTE_COMPLETE}`]() {
    const routeData = this.rootState.route.data;
    const routeParams = this.state.routeParams!;
    const views = routeData.views;
    if (views.comments && views.comments.List) {
      if (this.state.listKey !== routeParams.listKey || !simpleEqual(this.state.listSearch, routeParams.listSearch)) {
        await this.dispatch(this.actions.searchList(routeParams.listSearch));
      }
    } else if (views.comments && views.comments.Details) {
      if (this.state.detailKey !== routeParams.detailKey || this.state.itemDetail!.id !== routeParams.itemId) {
        await this.dispatch(this.actions.getItemDetail(routeParams.itemId));
      }
    }
  }
}
