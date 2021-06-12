import React, { ReactElement, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import {
  HOME_ROUTE,
  DEVELOPERS,
  REPO_LANGUAGE_FILTER,
  DEVELOPER_LANGUAGE_FILTER,
} from "./constant";

const Home = lazy(() => import("../page/home/home"));
const NotFound = lazy(() => import("../page/notfound/notfound"));

const IndexRouter: React.FC = (props: any): ReactElement => (
  <Suspense fallback={<p>Loading...</p>}>
    <Switch>
      <Route
        path={HOME_ROUTE}
        exact
        component={(props: any) => <Home {...props} />}
      />

      <Route
        path={DEVELOPERS}
        exact
        component={(props: any) => <Home {...props} />}
      />
      <Route
        path={REPO_LANGUAGE_FILTER}
        exact
        component={(props: any) => <Home {...props} />}
      />
      <Route
        path={DEVELOPER_LANGUAGE_FILTER}
        exact
        component={(props: any) => <Home {...props} />}
      />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default IndexRouter;
