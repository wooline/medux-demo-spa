import {ActionTypes, BaseModelHandlers, effect} from '@medux/react-web-router';
import {ItemDetail, ListItem, ListSearch, ListSummary} from 'entity/video';
import {RootState, actions} from 'modules';

import {BaseModelState} from '@medux/react-web-router/types/export';
import {ModuleNames} from 'modules/names';
import api from './api';
import {simpleEqual} from 'common/utils';

// 定义本模块的路由参数类型
export interface RouteParams {
  itemId: string;
  _detailKey: string;
  _listKey: string;
  listSearch: ListSearch;
}
// 定义本模块的State类型
export interface State extends BaseModelState<RouteParams> {
  listSearch?: ListSearch;
  listItems?: ListItem[];
  listSummary?: ListSummary;
  itemDetail?: ItemDetail;
  _listKey?: string;
  _detailKey?: string;
}

// 定义本模块State的初始值
export const initModelState: State = {
  routeParams: {
    _detailKey: '',
    _listKey: '',
    itemId: '',
    listSearch: {
      title: '',
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
    const _listKey = this.state.routeParams!._listKey;
    this.updateState({listSearch, listItems, listSummary, _listKey});
  }
  @effect()
  public async getItemDetail(itemId: string) {
    const [itemDetail] = await Promise.all([api.getItemDetail(itemId), api.hitItem(itemId)]);
    const _detailKey = this.state.routeParams!._detailKey;
    this.updateState({itemDetail, _detailKey});
    await this.dispatch(actions.comments.searchList({articleType: 'video', articleId: itemDetail.id}));
  }

  // 同时监听初始化INIT和路由变化的action
  // 参数 null 表示不需要监控loading状态，searchList时会监控loading
  @effect(null)
  protected async [`${ModuleNames.videos}/${ActionTypes.M_INIT},${ActionTypes.F_ROUTE_COMPLETE}`]() {
    const routeData = this.rootState.route.data;
    const routeParams = this.state.routeParams!;
    const views = routeData.views;
    if (views.videos && views.videos.List) {
      if (this.state._listKey !== routeParams._listKey || !simpleEqual(this.state.listSearch, routeParams.listSearch)) {
        await this.dispatch(this.actions.searchList(routeParams.listSearch));
      }
    } else if (views.videos && views.videos.Details) {
      if (this.state._detailKey !== routeParams._detailKey || this.state.itemDetail!.id !== routeParams.itemId) {
        await this.dispatch(this.actions.getItemDetail(routeParams.itemId));
      }
    }
  }
}
