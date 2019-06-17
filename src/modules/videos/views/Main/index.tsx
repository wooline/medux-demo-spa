import {Route, Switch} from 'react-router-dom';

import React from 'react';
import {loadView} from '@medux/react';
import {moduleGetter} from 'modules';

const Details = loadView(moduleGetter, 'videos', 'Details');
const List = loadView(moduleGetter, 'videos', 'List');

class Component extends React.PureComponent {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/videos/:id" component={Details} />
        <Route component={List} />
      </Switch>
    );
  }
}

export default Component;
