import {ItemDetail, ListItem, ListSearch, ListSummary} from 'entity/video';

import request from 'common/request';

export class API {
  public searchList(listSearch: ListSearch) {
    listSearch = {...listSearch};
    if (!listSearch.title) {
      delete listSearch.title;
    }
    return request<{listItems: ListItem[]; listSummary: ListSummary}>('get', '/ajax/videos', listSearch).then(reslut => {
      reslut.listItems.forEach(item => {
        item.coverUrl = initEnv.staticPath + item.coverUrl;
      });
      return reslut;
    });
  }
  public getItemDetail(id: string) {
    return request<ItemDetail>('get', '/ajax/videos/:id', {id}).then(reslut => {
      reslut.coverUrl = initEnv.staticPath + reslut.coverUrl;
      reslut.videoUrl = initEnv.staticPath + reslut.videoUrl;
      return reslut;
    });
  }
  public hitItem(id: string) {
    return request<void>('post', '/ajax/videos/:id/hit', {id});
  }
}

export default new API();
