import 'Global';

import {moduleGetter, routeConfig} from 'modules';

import {buildApp} from '@medux/react-web-router';
import {createBrowserHistory} from 'history';

buildApp(moduleGetter, 'app', createBrowserHistory(), routeConfig);
