import './index.less';

import * as React from 'react';

import {RootState, moduleGetter} from 'modules';

import Editor from '../Editor';
import {ModuleNames} from 'modules/names';
import {connect} from 'react-redux';
import {loadView} from '@medux/react';

const Details = loadView(moduleGetter, ModuleNames.comments, 'Details');
const List = loadView(moduleGetter, ModuleNames.comments, 'List');

interface StateProps {
  showDetail: boolean;
}

class Component extends React.PureComponent<StateProps> {
  public render() {
    return (
      <div className={`${ModuleNames.comments}`}>
        <div className="wrap">{this.props.showDetail ? <Details /> : <List />}</div>
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
