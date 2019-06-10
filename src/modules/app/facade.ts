import {ModuleNames} from 'modules/names';
import {exportFacade} from '@medux/core';
import {ModelActions, State} from './model';

export type ModelState = State;

export default exportFacade<ModelActions>(ModuleNames.app);
