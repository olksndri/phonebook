import css from './UserMenu.module.css';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <NavLink to="/" onClick={onLogout} className={css['nav-link']}>
        Logout
      </NavLink>
    </>
  );
};
