import 'Global';

import {history, routeConfig} from 'modules';

import {buildApp} from '@medux/react-web-router';

buildApp(moduleGetter, 'app', history, routeConfig);
