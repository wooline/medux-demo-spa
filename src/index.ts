import 'Global';

import {buildApp} from '@medux/react-web-router';
import {createBrowserHistory} from 'history';
import {routeConfig} from 'modules';

buildApp(moduleGetter, 'app', createBrowserHistory(), routeConfig);
