import {exportModule} from '@medux/react';
import {ModuleNames} from 'modules/names';
import {initModelState, ModuleHandlers} from './model';
import Main from './views/Main';

export default exportModule(ModuleNames.app, initModelState, ModuleHandlers, {Main});
