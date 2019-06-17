import * as app from 'modules/app';

import {RootState as BaseState} from '@medux/react';
import {exportGlobals} from '@medux/core';

// 定义模块的加载方案，同步或者异步均可
export const moduleGetter = {
  app: () => {
    return app;
  },
  comments: () => {
    return import(/* webpackChunkName: "comments" */ 'modules/comments');
  },
  photos: () => {
    return import(/* webpackChunkName: "photos" */ 'modules/photos');
  },
  videos: () => {
    return import(/* webpackChunkName: "videos" */ 'modules/videos');
  },
};

// export type ModuleGetter = typeof moduleGetter;

export const {actions, states} = exportGlobals(moduleGetter);

export type RootState = BaseState<typeof moduleGetter>;
