import { Route, Router, Switch } from 'react-router-dom';
import Login from 'views/Auth';
import UserInfo from 'views/UserInfo/indx';
import { history } from './history';
import { PrivateRoute } from './PrivateRoute';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/user-info" component={UserInfo} /> */}

        <PrivateRoute exact path="/user-info" Component={UserInfo} />
      </Switch>
    </Router>
  );
};

export default Routes;
