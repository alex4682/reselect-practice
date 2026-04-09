import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';

const HomeView = lazy(() =>
  import('./views/HomeView.jsx' /* webpackChunkName: "home-view" */),
);
const AuthorsView = lazy(() =>
  import('./views/AuthorsView.jsx' /* webpackChunkName: "authors-view" */),
);
const BooksView = lazy(() =>
  import('./views/BooksView.jsx' /* webpackChunkName: "books-view" */),
);
const Filtration = lazy(() =>
  import('./views/Filtr.jsx' /* webpackChunkName: "filtration-view" */),
);
const BookDetailsView = lazy(() =>
  import('./views/BookDetailsView.jsx' /* webpackChunkName: "book-view" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.jsx' /* webpackChunkName: "404-view" */),
);
const CreateBook = lazy(() =>
  import('./views/CreateBook.jsx' /* webpackChunkName: "create-book-view" */),
);
const CreateAuthor = lazy(() =>
  import('./views/CreateAuthor.jsx' /* webpackChunkName: "create-author-view" */),
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>ЗАГРУЖАЄМО МАРШРУТ...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/authors">
            <AuthorsView />
          </Route>

          <Route path="/books" exact>
            <BooksView />
          </Route>

          <Route path="/books/:slug">
            <BookDetailsView />
          </Route>
          <Route path="/filtration">
            <Filtration />
          </Route>
          <Route path="/create" exact>
            <CreateBook />
          </Route>
          <Route path="/create/author">
            <CreateAuthor />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
