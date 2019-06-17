import {ModelHandlers, initModelState} from './model';

import List from './views/List';
import Main from './views/Main';
import {exportModule} from '@medux/react';

export default exportModule('messages', initModelState, ModelHandlers, {Main, List});
