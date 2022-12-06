// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../redux/auth/auth-selectors';

// export default function PrivateRoute({
//   isAuthenticated,
//   redirectTo,
//   children,
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to={redirectTo} />}
//     </Route>
//   );
// }
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/registration" />;
};
export default PrivateRoute;
