import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav className={s.nav}>
      <NavLink to="/" exactclassname={s.link} activeclassname={s.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exactclassname={s.link}
          activeclassname={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
