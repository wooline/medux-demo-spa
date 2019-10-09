import {CurUser, LoginRequest, LoginResponse} from 'entity/common';

import {ProjectConfig} from 'entity/global';
import request from 'common/request';

export class API {
  public getCurUser() {
    return request<CurUser>('get', '/ajax/session').then(user => {
      user.avatarUrl = initEnv.staticPath + user.avatarUrl;
      return user;
    });
  }
  public login(req: LoginRequest) {
    return request<LoginResponse>('put', '/ajax/session', {}, req).then(user => {
      user.avatarUrl = initEnv.staticPath + user.avatarUrl;
      return user;
    });
  }
  public getSettings() {
    return request<ProjectConfig>('get', '/ajax/project-config').then(projectConfig => {
      projectConfig.logoUrl = initEnv.staticPath + projectConfig.logoUrl;
      projectConfig.startupPage.imageUrl = initEnv.staticPath + projectConfig.startupPage.imageUrl;
      return projectConfig;
    });
  }

  public reportError(error: any): Promise<boolean> {
    console.log('report', error.message);
    return Promise.resolve(true);
  }
}

export default new API();
