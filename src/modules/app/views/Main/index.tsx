import 'asset/css/global.less';
import './index.less';

import {DispatchProp, connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {RootState, actions, moduleGetter} from 'modules';

import BottomNav from '../BottomNav';
import Loading from '../Loading';
import {LoadingState} from '@medux/core';
import LoginPop from '../LoginPop';
import {Modal} from 'antd-mobile';
import {ModuleNames} from 'modules/names';
import NotFound from 'components/NotFound';
import React from 'react';
import {StartupStep} from 'entity/global';
import TopNav from '../TopNav';
import Welcome from '../Welcome';
import {loadView} from '@medux/react';

const PhotosMain = loadView(moduleGetter, 'photos', 'Main');
const VideosMain = loadView(moduleGetter, 'videos', 'Main');
const MessagesView = loadView(moduleGetter, 'messages', 'Main');

interface StateProps {
  showLoginPop: boolean;
  showNotFoundPop: boolean;
  startupStep: StartupStep;
  globalLoading: LoadingState;
}

class Component extends React.PureComponent<StateProps & DispatchProp> {
  private onCloseLoginPop = () => {
    this.props.dispatch(actions.app.putShowLoginPop(false));
  };
  private onCloseNotFound = () => {
    this.props.dispatch(actions.app.putShowNotFoundPop(false));
  };

  public render() {
    const {showLoginPop, showNotFoundPop, startupStep, globalLoading} = this.props;
    return (
      <div className={ModuleNames.app}>
        {startupStep !== StartupStep.init && (
          <div className="g-page">
            <TopNav />
            <Switch>
              <Redirect exact={true} path="/" to="/photos" />
              <Route exact={false} path="/photos" component={PhotosMain} />
              <Route exact={false} path="/videos" component={VideosMain} />
              <Route exact={false} path="/messages" component={MessagesView} />
              <Route component={NotFound} />
            </Switch>
            <BottomNav />
          </div>
        )}
        {(startupStep === StartupStep.configLoaded || startupStep === StartupStep.startupImageLoaded || startupStep === StartupStep.startupCountEnd) && <Welcome className={startupStep} />}
        <Modal visible={showLoginPop} transparent={true} onClose={this.onCloseLoginPop} title="请登录" closable={true}>
          <LoginPop />
        </Modal>
        <Modal visible={showNotFoundPop} transparent={true} onClose={this.onCloseNotFound} title="找不到" closable={true}>
          <NotFound />
        </Modal>
        <Loading loading={globalLoading} />
      </div>
    );
  }
}
// todo document title处理
const mapStateToProps: (state: RootState) => StateProps = state => {
  const app = state.app!;
  return {
    showLoginPop: !!(app.showLoginPop && !app.curUser!.hasLogin),
    showNotFoundPop: !!app.showNotFoundPop,
    startupStep: app.startupStep,
    globalLoading: app.loading.global,
  };
};

export default connect(mapStateToProps)(Component);
