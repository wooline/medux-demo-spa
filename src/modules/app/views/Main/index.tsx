import React, {ComponentType} from 'react';
import {LoadingState} from '@medux/core';
import {connect, DispatchProp} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import NotFound from 'components/NotFound';
import {StartupStep} from 'entity/global';
import {RootState} from 'modules';
import {ModuleNames} from 'modules/names';
import Welcome from '../Welcome';

import 'asset/css/global.less';
import './index.less';

interface ReduxProps extends DispatchProp {
  showLoginPop: boolean;
  showNotFoundPop: boolean;
  startupStep: StartupStep;
  globalLoading: LoadingState;
}
interface OwrnProps {
  aaa: string;
}

class Component extends React.PureComponent<ReduxProps & OwrnProps> {
  public render() {
    const {startupStep} = this.props;
    return (
      <div className={ModuleNames.app}>
        {startupStep !== StartupStep.init && (
          <div className="g-page">
            <Switch>
              <Route component={NotFound} />
            </Switch>
          </div>
        )}
        {(startupStep === StartupStep.configLoaded || startupStep === StartupStep.startupImageLoaded || startupStep === StartupStep.startupCountEnd) && <Welcome className={startupStep} />}
      </div>
    );
  }
}

const mapStateToProps: (state: RootState) => ReduxProps = state => {
  const app = state.app!;
  return {
    dispatch: {} as any,
    showLoginPop: !!app.showLoginPop && !app.curUser!.hasLogin,
    showNotFoundPop: !!app.showNotFoundPop,
    startupStep: app.startupStep,
    globalLoading: app.loading.global,
  };
};

export default connect(mapStateToProps)(Component);
