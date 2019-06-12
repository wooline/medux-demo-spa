import {ModelActions, State} from './model';

import {ListSearch} from 'entity/comment';
import {ModuleNames} from 'modules/names';
import {exportFacade} from '@medux/core';

export type ModelState = State;

export default exportFacade<ModelActions>(ModuleNames.comments);

export const defaultListSearch: ListSearch = {
  articleType: '',
  articleId: '',
  isNewest: false,
  page: 1,
  pageSize: 10,
};
