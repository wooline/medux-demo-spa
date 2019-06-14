import {BaseModelHandlers, effect, reducer} from '@medux/core';
import {ItemCreateData, ItemDetail, ListItem, ListSearch, ListSummary} from 'entity/comment';

import {BaseModelState} from '@medux/core/types/export';
import {RootState} from 'modules';
import {Toast} from 'antd-mobile';
import api from './api';

export const defaultListSearch: ListSearch = {
  articleType: '',
  articleId: '',
  isNewest: false,
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
  @reducer
  public putItemDetail(itemDetail?: ItemDetail): State {
    return {...this.state, itemDetail};
  }

  @effect()
  public async createItem(data: ItemCreateData) {
    const response = await api.createItem(data);
    if (!response.error) {
      Toast.info('操作成功');
      // 如果创建成功，要让用户看到自已发表的评论，必须刷新列表，以创建时间排序
      if (this.state.itemDetail) {
        await this.getItemDetail(this.state.itemDetail.id);
      } else {
        await this.searchList({isNewest: true, page: 1});
      }
    } else {
      Toast.info(response.error.message);
    }
    return response;
  }
  @effect()
  public async searchList(options: Partial<ListSearch> = {}) {
    const listSearch: ListSearch = {...(this.state.listSearch || defaultListSearch), ...options};
    const {listItems, listSummary} = await api.searchList(listSearch);
    this.updateState({listSearch, listItems, listSummary, itemDetail: undefined});
  }
  @effect()
  public async getItemDetail(itemDetailId: string) {
    const itemDetail = await api.getItemDetail(itemDetailId);
    this.updateState({itemDetail});
  }
}
