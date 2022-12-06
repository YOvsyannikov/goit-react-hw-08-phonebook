import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

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

  // class App extends Component {
  //   componentDidMount() {
  //     this.props.onGetCurrentUser();
  //   }

  // render() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          {/* <PublicRoute exact path="/" component={HomeView} /> */}
          {/* <Route path="/" component={<Layout />}> */}
          <Route exact path="/" component={<HomeView />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute navigateTo="/login" component={<ContactsView />} />
            }
          />
          <Route
            path="/register"
            element={
              <PrivateRoute
                navigateTo="/contacts"
                component={<RegisterView />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PrivateRoute navigateTo="/contacts" component={<LoginView />} />
            }
          />
          <Route>
            <Route path="*" element={<NotFoundView />}></Route>
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3700} position="top-center" />
    </Container>
  );
}

App.propTypes = {
  onGetCurrentUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
