import Icon, {IconClass} from 'components/Icon';

import React from 'react';
import {TabBar} from 'antd-mobile';
import {UnauthorizedError} from 'entity/common';
import {errorAction} from '@medux/react-web-router';
import style from './index.m.less';
import {uniqueKey} from 'common/utils';

interface Props extends DispatchProp {
  views: RootState['route']['data']['views'];
  hasLogin: boolean;
}

class Component extends React.PureComponent<Props> {
  public render() {
    const {views, dispatch} = this.props;

    return (
      <div className={`${style.root} g-doc-width`}>
        <TabBar noRenderContent={true} barTintColor="#108ee9" tintColor="#ff0" unselectedTintColor="#fff">
          <TabBar.Item
            icon={<Icon type={IconClass.PICTURE} />}
            selectedIcon={<Icon type={IconClass.PICTURE} />}
            title="组团"
            key="photos"
            selected={!!views.photos}
            onPress={() => {
              historyActions.push({paths: [viewNames.appMain, viewNames.photosList], params: {photos: {_listKey: uniqueKey()}}});
            }}
          />
          <TabBar.Item
            title="分享"
            key="videos"
            icon={<Icon type={IconClass.LIVE} />}
            selectedIcon={<Icon type={IconClass.LIVE} />}
            selected={!!views.videos}
            onPress={() => {
              historyActions.push({paths: [viewNames.appMain, viewNames.videosList], params: {videos: {_listKey: uniqueKey()}}});
            }}
          />
          <TabBar.Item
            icon={<Icon type={IconClass.MESSAGE} />}
            selectedIcon={<Icon type={IconClass.MESSAGE} />}
            title="消息"
            key="messages"
            selected={!!views.messages}
            onPress={() => {
              if (!this.props.hasLogin) {
                dispatch(errorAction(new UnauthorizedError()));
              } else {
                historyActions.push({paths: [viewNames.appMain, viewNames.messagesList], params: {messages: {_listKey: uniqueKey()}}});
              }
            }}
          />
        </TabBar>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    views: state.route.data.views,
    hasLogin: state.app!.curUser!.hasLogin,
  };
};

export default reduxConnect(mapStateToProps)(Component);
