import {RootState as BaseState} from '@medux/core/types/export';
import * as app from 'modules/app';
import {ModuleNames} from './names';

// 定义模块的加载方案，同步或者异步均可
export const moduleGetter = {
  [ModuleNames.app]: () => {
    return app;
  },
};

export type ModuleGetter = typeof moduleGetter;

export type RootState = BaseState<ModuleGetter>;
