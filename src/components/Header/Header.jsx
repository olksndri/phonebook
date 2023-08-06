import css from './Header.module.css';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &.active {
    color: black;
  }
`;

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav className={css.header}>
        <StyledNavLink to="/">Home</StyledNavLink>
        <div className={css.wrapper}>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <StyledNavLink to="/register">Register</StyledNavLink>
              <StyledNavLink to="/login">Login</StyledNavLink>
            </>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};
