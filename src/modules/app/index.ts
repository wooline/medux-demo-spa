import {ModelHandlers, initModelState} from './model';

import Main from './views/Main';
import {ModuleNames} from 'modules/names';
import {exportModule} from '@medux/react';

export default exportModule(ModuleNames.app, initModelState, ModelHandlers, {Main});
