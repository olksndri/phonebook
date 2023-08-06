import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

export const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(logIn({ email, password }));
    form.reset();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" />
      <button type="submit"></button>
    </StyledForm>
  );
};
