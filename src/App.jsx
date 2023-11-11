import { Route, Routes, useNavigate } from 'react-router-dom';
import { Contacts } from './pages/Contacts';
import { Home } from 'pages/Home';
import { Header } from 'components/Header/Header';
import { SignUp } from 'pages/SignUp';
import { SignIn } from 'pages/SignIn';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Loading } from 'components/Loading/Loading';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, dispatch, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          {isRefreshing ? (
            <Route index element={<Loading />} />
          ) : (
            <>
              <Route index element={!isLoggedIn ? <Home /> : <Contacts />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="signin" element={<SignIn />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
};
