import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLoading = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoading && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};
export default PublicRoute;
