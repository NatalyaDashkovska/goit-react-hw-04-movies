import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
import routes from './routes';

const HomeView = lazy(() =>
  import('./views/HomeView.jsx' /* webpackChunkName: "home-view" */),
);

const FilmView = lazy(() =>
  import('./views/FilmView.jsx' /* webpackChunkName: "film-view" */),
);

const FilmSearch = lazy(() =>
  import('./views/FilmSearch.jsx' /* webpackChunkName: "film-search" */),
);

const NotFoundView = lazy(() =>
  import('./views/NotFoundView.jsx' /* webpackChunkName: "not-found-view" */),
);
const App = () => (
  <>
    <AppBar />

    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />

        <Route path={routes.movieDetails} component={FilmView} />

        <Route path={routes.movies} component={FilmSearch} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
