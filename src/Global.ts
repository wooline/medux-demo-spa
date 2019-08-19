import {actions, historyActions, moduleGetter, moduleNames, toUrl, viewNames} from './modules';

// 将某些常用变量提升至global，对全局变量有洁癖者可忽略此文件
import {ErrorEntity} from 'entity/common';
import {connect} from 'react-redux';
import {loadView} from '@medux/react-web-router';

type HistoryActions = typeof historyActions;
type ToUrl = typeof toUrl;
type Actions = typeof actions;
type ModuleGetter = typeof moduleGetter;
type EnumViewNames = typeof viewNames;
type EnumModuleNames = typeof moduleNames;
type LoadView = typeof loadView;

declare global {
  // 定义获取全局设置的函数，为了在上线后可以由运维修改，该函数的实现放在/public/index.html中，以防止被 webpack 打包
  interface InitEnv {
    clientPublicPath: string;
    apiServerPath: {[key: string]: string};
  }
  function getInitEnv(): InitEnv;
  type moduleNames = EnumModuleNames;
  type viewNames = EnumViewNames;
  type RootState = import('./modules').RootState;
  type RouteData = RootState['route']['data'];
  type CommonErrorCode = import('./entity/common').CommonErrorCode;
  type Result<Data, Error extends ErrorEntity> = import('./entity/common').Result<Data, Error>;
  type DispatchProp = import('react-redux').DispatchProp;
  const initEnv: InitEnv;
  const moduleGetter: ModuleGetter;
  const loadView: LoadView;
  const actions: Actions;
  const moduleNames: moduleNames;
  const viewNames: viewNames;
  const reduxConnect: typeof connect;
  const historyActions: HistoryActions;
  const toUrl: ToUrl;
}

const initEnv = getInitEnv();

((data: {[key: string]: any}) => {
  Object.keys(data).forEach(key => {
    window[key] = data[key];
  });
})({actions, moduleGetter, moduleNames, viewNames, toUrl, initEnv, historyActions, loadView, reduxConnect: connect});
