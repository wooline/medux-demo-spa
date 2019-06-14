import {Route, Switch} from 'react-router-dom';

import {ModuleNames} from 'modules/names';
import React from 'react';
import {loadView} from '@medux/react';
import {moduleGetter} from 'modules';

const Details = loadView(moduleGetter, ModuleNames.photos, 'Details');
const List = loadView(moduleGetter, ModuleNames.photos, 'List');

class Component extends React.PureComponent {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/photos/:id" component={Details} />
        <Route component={List} />
      </Switch>
    );
  }
}

export default Component;
