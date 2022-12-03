import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import LoaderComponent from './LoaderComponent/LoaderComponent';

import { authOperations } from '../redux/auth/auth-operations';

const HomeView = lazy(() =>
  import('../views/HomeView/HomeView.js' /* webpackChunkName: "home-view" */)
);

const RegisterView = lazy(() =>
  import(
    '../views/RegisterView/RegisterView.js' /* webpackChunkName: "register-view" */
  )
);
const LoginView = lazy(() =>
  import('../views/LoginView/LoginView.js' /* webpackChunkName: "login-view" */)
);
const ContactsView = lazy(() =>
  import(
    '../views/ContactsView/ContactsView.js' /* webpackChunkName: "contacts-view" */
  )
);

const NotFoundView = lazy(() =>
  import(
    '../views/NotFoundView/NotFoundView.js' /* webpackChunkName: "not-found-view" */
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>

          <Route>
            <NotFoundView />
          </Route>
        </Routes>
      </Suspense>

      <ToastContainer autoClose={3700} position="top-center" />
    </Container>
  );
}

export default App;
