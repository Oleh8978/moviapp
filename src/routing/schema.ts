import { ComponentType, ComponentProps } from 'react';
import { matchPath, RouteComponentProps } from 'react-router-dom';

//Views
import Film from '../pages/film';
import Films from '../pages/films';


// Interfaces
export interface IRoute {
  readonly name: Pages;
  readonly path: string;
  readonly isExact: boolean;
  readonly component: ComponentType<
    RouteComponentProps<any> & ComponentProps<any> & { opacity: number }
  >;
  readonly childRoutes?: IRoute[];
}

export type Pages =
  | 'movie'
  | 'movies'
  | 'notfound';

class RoutingSchema {
  private schema: IRoute[] = [
    {
      name: 'movies',
      path: '/',
      isExact: true,
      component: Films,
    },
    {
      name: 'movie',
      path: '/movie/:id',
      isExact: true,
      component: Film,
    },
  
  ];
  private findRouteByPath(path: string): IRoute | undefined {
    return this.schema.find(({ path: routePath }) => routePath === path);
  }

  private findRouteInArray(
    routes: IRoute[],
    routeName: Pages,
  ): IRoute | undefined {
    for (const route of routes) {
      if (route.name === routeName) {
        return route;
      }
      if (route.childRoutes && route.childRoutes.length) {
        const foundRoute = this.findRouteInArray(route.childRoutes, routeName);
        if (foundRoute) {
          return foundRoute;
        }
      }
    }
  }

  private findRouteByName(name: Pages): IRoute | undefined {
    const route = this.findRouteInArray(this.schema, name);
    if (route) {
      return route;
    }
    return undefined;
  }

  public get getSchema() {
    return this.schema;
  }

  public getSchemaItem(name: Pages): IRoute | undefined {
    const route = this.findRouteByName(name);

    if (route && route.path) {
      return route;
    }
  }

  public getLink(name: Pages): string {
    const route = this.findRouteByName(name);
    if (route && route.path) {
      return route.path;
    } else {
      return '/error';
    }
  }
  public getName(path: string): Pages | false {
    const route = this.findRouteByPath(path);

    if (route && route.path) {
      return route.name;
    } else {
      return false;
    }
  }
}

export default new RoutingSchema();
