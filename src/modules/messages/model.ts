import {ActionTypes, BaseModelHandlers, effect} from '@medux/core';
import {ListItem, ListSearch, ListSummary} from 'entity/message';
import {isForceRefresh, parseQuery} from 'common/routers';

import {BaseModelState} from '@medux/core/types/export';
import {RootState} from 'modules';
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

  // 兼听路由变化的 action
  // 参数 null 表示不需要监控loading状态，searchList时会监控loading
  @effect(null)
  protected async [ActionTypes.F_VIEW_INVALID]() {
    const views = this.rootState.views;
    if (views.messages && views.messages.List) {
      const {search, hash} = this.rootState.router.location;
      const forceRefresh = isForceRefresh(hash);
      const listSearch = parseQuery('search', search, defaultListSearch);
      if (forceRefresh || (forceRefresh === null && !equal(this.state.listSearch, listSearch))) {
        await this.dispatch(this.actions.searchList(listSearch));
      }
    }
  }
}
