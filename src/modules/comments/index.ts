import {ModelHandlers, initModelState} from './model';

import Details from './views/Details';
import List from './views/List';
import Main from './views/Main';
import {ModuleNames} from 'modules/names';
import {exportModule} from '@medux/react';

export default exportModule(ModuleNames.comments, initModelState, ModelHandlers, {Main, Details, List});
