import {Route, Switch} from 'react-router-dom';

import React from 'react';
import {loadView} from '@medux/react';
import {moduleGetter} from 'modules';

const List = loadView(moduleGetter, 'messages', 'List');

interface Props {
  pathname: string;
}
class Component extends React.PureComponent<Props> {
  public render() {
    return (
      <Switch>
        <Route component={List} />
      </Switch>
    );
  }
}

export default Component;
