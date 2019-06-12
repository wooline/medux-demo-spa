import {ModelActions, State} from './model';

import {ListSearch} from 'entity/photo';
import {ModuleNames} from 'modules/names';
import {exportFacade} from '@medux/core';

export type ModelState = State;

export default exportFacade<ModelActions>(ModuleNames.photos);

export const defaultListSearch: ListSearch = {
  title: '',
  page: 1,
  pageSize: 10,
};
