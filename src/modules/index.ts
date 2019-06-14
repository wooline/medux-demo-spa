import * as app from 'modules/app';

import {RootState as BaseState} from '@medux/react';
import {ModuleNames} from './names';
import {exportActions} from '@medux/core';

// 定义模块的加载方案，同步或者异步均可
export const moduleGetter = {
  [ModuleNames.app]: () => {
    return app;
  },
  [ModuleNames.comments]: () => {
    return import(/* webpackChunkName: "comments" */ 'modules/comments');
  },
  [ModuleNames.photos]: () => {
    return import(/* webpackChunkName: "photos" */ 'modules/photos');
  },
};

// export type ModuleGetter = typeof moduleGetter;

export const actions = exportActions(moduleGetter);

export type RootState = BaseState<typeof moduleGetter>;
