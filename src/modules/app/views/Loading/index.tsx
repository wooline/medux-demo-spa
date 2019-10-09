import {Icon} from 'antd-mobile';
import {LoadingState} from '@medux/react-web-router';
import React from 'react';
import style from './index.m.less';

interface Props {
  loading: LoadingState;
}

const Component = (props: Props) => {
  const {loading} = props;
  return loading === LoadingState.Start || loading === LoadingState.Depth ? (
    <div className={style.root + loading}>
      <Icon className="loading-icon" type="loading" />
      <div className="wrap" />
    </div>
  ) : null;
};
export default Component;
