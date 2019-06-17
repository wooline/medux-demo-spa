import {ActionTypes, BaseModelHandlers, effect} from '@medux/core';
import {ItemDetail, ListItem, ListSearch, ListSummary} from 'entity/video';
import {RootState, actions} from 'modules';
import {isForceRefresh, parseQuery} from 'common/routers';

import {BaseModelState} from '@medux/core/types/export';
import api from './api';
import {equal} from 'common/utils';

export const defaultListSearch: ListSearch = {
  title: '',
  page: 1,
  pageSize: 10,
};

// 定义本模块的State类型
export interface State extends BaseModelState {
  listSearch?: ListSearch;
  listItems?: ListItem[];
  listSummary?: ListSummary;
  itemDetail?: ItemDetail;
}

// 定义本模块State的初始值
export const initModelState: State = {};

export class ModelHandlers extends BaseModelHandlers<State, RootState> {
  @effect()
  public async searchList(options: Partial<ListSearch> = {}) {
    const listSearch: ListSearch = {...(this.state.listSearch || defaultListSearch), ...options};
    const {listItems, listSummary} = await api.searchList(listSearch);
    this.updateState({listSearch, listItems, listSummary});
  }
  @effect()
  public async getItemDetail(itemDetailId: string) {
    const [itemDetail] = await Promise.all([api.getItemDetail(itemDetailId), api.hitItem(itemDetailId)]);
    this.updateState({itemDetail});
    await this.dispatch(actions.comments.searchList({articleType: 'videos', articleId: itemDetail.id}));
  }

  // 兼听路由变化的 action
  // 参数 null 表示不需要监控loading状态，searchList时会监控loading
  @effect(null)
  protected async [ActionTypes.F_VIEW_INVALID]() {
    const views = this.rootState.views;
    if (views.videos && views.videos.List) {
      const {search, hash} = this.rootState.router.location;
      const forceRefresh = isForceRefresh(hash);
      const listSearch = parseQuery('search', search, defaultListSearch);
      if (forceRefresh || (forceRefresh === null && !equal(this.state.listSearch, listSearch))) {
        await this.dispatch(this.actions.searchList(listSearch));
      }
    } else if (views.videos && views.videos.Details) {
      const {pathname, hash} = this.rootState.router.location;
      const arr = pathname.match(/^\/videos\/(\d+)$/);
      if (arr) {
        const forceRefresh = isForceRefresh(hash);
        const itemId: string = arr[1];
        if (forceRefresh || (forceRefresh === null && (!this.state.itemDetail || this.state.itemDetail.id !== itemId))) {
          await this.dispatch(this.actions.getItemDetail(itemId));
        }
      }
    }
  }
}
