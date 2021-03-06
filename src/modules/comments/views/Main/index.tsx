import {Route, Switch} from 'react-router-dom';

import Editor from '../Editor';
import React from 'react';
import style from './index.m.less';

const Details = loadView('comments', 'Details');
const List = loadView('comments', 'List');

class Component extends React.PureComponent<{}> {
  public render() {
    return (
      <div className={style.root}>
        <div className="wrap">
          <Switch>
            <Route exact={true} path="/:articleType/:articleId/comments" component={List} />
            <Route exact={true} path="/:articleType/:articleId/comments/:itemId" component={Details} />
          </Switch>
        </div>
        <Editor />
      </div>
    );
  }
}

export default Component;
