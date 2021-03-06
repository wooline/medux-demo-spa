import {Icon, NavBar} from 'antd-mobile';

import React from 'react';
import style from './index.m.less';

interface Props extends DispatchProp {
  showSearch: boolean;
  avatarUrl: string;
  logoUrl: string;
}

class Component extends React.PureComponent<Props> {
  private onShowSearch = () => {
    this.props.dispatch(actions.app.putShowSearch(!this.props.showSearch));
  };

  public render() {
    const {logoUrl, avatarUrl} = this.props;
    return (
      <div className={`${style.root} g-doc-width`}>
        <NavBar
          icon={<span className="avatar" style={{backgroundImage: `url(${avatarUrl})`}} />}
          rightContent={
            <div onClick={this.onShowSearch}>
              <Icon type="search" />
            </div>
          }
        >
          <img src={logoUrl} className="logo" />
        </NavBar>
      </div>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    showSearch: Boolean(state.app!.showSearch),
    logoUrl: state.app!.projectConfig!.logoUrl,
    avatarUrl: state.app!.curUser!.avatarUrl,
  };
};

export default reduxConnect(mapStateToProps)(Component);
