import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


// components
import Loader from '../components/loader';

// routing schema
import RoutingSchema, { IRoute } from './schema';

// Render all routes
const generateRoutes = (routes: IRoute[]) => {
  return routes.map(({ component: Component, ...route }) => (
    <Route
      exact={route.isExact}
      key={route.name}
      path={route.path}
      render={(props: any) => {
        return (
          <Component
            key={route.name + Object.values(props.match.params).join(',')}
            {...props}>
            {route.childRoutes ? (
              <Switch>{generateRoutes(route.childRoutes)}</Switch>
            ) : (
              <></>
            )}
          </Component>
        );
      }}
    />
  ));
};

const Routes = generateRoutes(RoutingSchema.getSchema);

interface Props {
  loader: boolean;
}

const Routing: React.FC<Props> = (props) => {

  if (true) {
    return (
      <Loader/>
    );
  }

  return (
        <>
          <Switch>
            {Routes}
            <Redirect to={'/'} />
          </Switch>
        </>
    );
  }

export default Routing;
