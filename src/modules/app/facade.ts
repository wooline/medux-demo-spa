import {ModelActions, State} from './model';

import {ModuleNames} from 'modules/names';
import {exportFacade} from '@medux/core';

export type ModelState = State;

export default exportFacade<ModelActions>(ModuleNames.app);
