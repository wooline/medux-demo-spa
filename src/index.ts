import {history, routeConfig} from 'common/route';

import {buildApp} from '@medux/react-web-router';
import {moduleGetter} from 'modules';

// 获取全局设置的函数，为了在上线后可以由运维修改，该函数的实现放在/public/index.html中，以防止被 webpack 打包
window.InitEnv = getInitEnv();

buildApp(moduleGetter, 'app', history, routeConfig);
