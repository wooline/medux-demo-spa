import './index.less';

import {DispatchProp, connect} from 'react-redux';
import {ItemDetail, ListSearch} from 'entity/video';
import {RootState, moduleGetter} from 'modules';
import {stringifyQuery, toUrl} from 'common/routers';

import {Icon as MIcon} from 'antd-mobile';
import {ModuleNames} from 'modules/names';
import React from 'react';
import {defaultListSearch} from '../../model';
import {findDOMNode} from 'react-dom';
import {loadView} from '@medux/react';
import {routerActions} from 'connected-react-router';

const Comments = loadView(moduleGetter, ModuleNames.comments, 'Main');

interface StateProps {
  listSearch: ListSearch | undefined;
  itemDetail: ItemDetail | undefined;
}

class Component extends React.PureComponent<StateProps & DispatchProp> {
  private onClose = () => {
    const listSearch = {...this.props.listSearch};
    const search = stringifyQuery('search', listSearch, defaultListSearch);
    this.props.dispatch(routerActions.push(toUrl('/videos', search)));
  };

  public render() {
    const {itemDetail} = this.props;
    if (itemDetail) {
      return (
        <div className={`${ModuleNames.videos}-Details g-details g-doc-width g-modal g-enter-in`}>
          <div className="subject">
            <h2 />
            <span onClick={this.onClose} className="close-button">
              <MIcon size="md" type="cross-circle" />
            </span>
          </div>
          <div className="content">
            <video
              width="100%"
              height="100%"
              autoPlay={true}
              controls={true}
              preload="auto"
              muted={false}
              playsInline={true}
              poster={itemDetail.coverUrl}
              onError={() => this.setState({message: '暂无视频！'})}
            >
              <source src={itemDetail.videoUrl} type="video/mp4" />
            </video>
          </div>
          <div className="comments-panel">
            <Comments />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  private fadeIn() {
    // eslint-disable-next-line react/no-find-dom-node
    const dom = findDOMNode(this) as HTMLElement;
    if (dom && dom.className.indexOf('g-enter-in') > -1) {
      setTimeout(() => {
        dom.className = dom.className.replace('g-enter-in', '');
      }, 0);
    }
  }
  public componentDidUpdate() {
    this.fadeIn();
  }
  public componentDidMount() {
    this.fadeIn();
  }
}

const mapStateToProps: (state: RootState) => StateProps = state => {
  const model = state.videos!;
  return {
    listSearch: model.listSearch,
    itemDetail: model.itemDetail,
  };
};

export default connect(mapStateToProps)(Component);