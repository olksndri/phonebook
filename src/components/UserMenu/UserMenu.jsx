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
      <div className={css['user-info-wrap']}>
        {' '}
        <p className={css.name}>{user.name}</p>
        <p className={css.email}>{user.email}</p>
      </div>

      <NavLink to="/" onClick={onLogout} className={css['nav-link']}>
        Sign out
      </NavLink>
    </>
  );
};
