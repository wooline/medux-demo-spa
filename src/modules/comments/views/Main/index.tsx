import './index.less';

import {RootState, moduleGetter} from 'modules';
import {Route, Switch} from 'react-router-dom';

import Editor from '../Editor';
import {ModuleNames} from 'modules/names';
import React from 'react';
import {connect} from 'react-redux';
import {loadView} from '@medux/react';

const Details = loadView(moduleGetter, 'comments', 'Details');
const List = loadView(moduleGetter, 'comments', 'List');

interface StateProps {
  showDetail: boolean;
}

class Component extends React.PureComponent<StateProps> {
  public render() {
    return (
      <div className={`${ModuleNames.comments}`}>
        <div className="wrap">
          <Switch>
            <Route exact={true} path="/:articleType/:articleId" component={List} />
            <Route exact={false} path="/:articleType/:articleId/:itemId" component={Details} />
          </Switch>
        </div>
        <Editor />
      </div>
    );
  }
}

const mapStateToProps: (state: RootState) => StateProps = state => {
  return {
    showDetail: !!state.comments!.itemDetail,
  };
};

export default connect(mapStateToProps)(Component);
