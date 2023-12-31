import css from './Header.module.css';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: var(--accent-grey);
  }
`;

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={css['header-wrap']}>
        <nav className={css.header}>
          <StyledNavLink to="/" className={css['nav-link']}>
            Home
          </StyledNavLink>
          <div className={css.wrapper}>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <>
                <StyledNavLink to="/signup" className={css['nav-link']}>
                  Sign up
                </StyledNavLink>
                <StyledNavLink to="/signin" className={css['nav-link']}>
                  Sign in
                </StyledNavLink>
              </>
            )}
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
