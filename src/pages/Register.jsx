import { StyledForm } from './Login';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.fullname.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <label htmlFor="fullname">Full name</label>
      <input type="text" id="fullname" name="fullname" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" />
      <button type="submit"></button>
    </StyledForm>
  );
};
