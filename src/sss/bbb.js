import React, { Suspense, lazy } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import NotFoundView from './views/NotFoundView';

import routes from './routes';
import AppBar from './components/AppBar';

const HomeView = lazy(() =>
  import('./views/HomeView.jsx' /* webpackChunkName: "home-view" */),
);

const AuthorView = lazy(() =>
  import('./views/AuthorView.jsx' /* webpackChunkName: "authors-view" */),
);

const BookView = lazy(() =>
  import('./views/BookView.jsx' /* webpackChunkName: "books-view" */),
);

const BookDetailsView = lazy(() =>
  import(
    './views/BookDetailsView.jsx' /* webpackChunkName: "book-details-view" */
  ),
);
const App = () => (
  <>
    <AppBar />

    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.authors} component={AuthorView} />

        <Route path={routes.bookDetails} component={BookDetailsView} />
        <Route path={routes.books} component={BookView} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
