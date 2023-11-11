import { useDispatch } from 'react-redux';
import { register, logIn } from 'redux/auth/operations';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { validatePassword } from 'validation/validatePassword';
import { passwordVisibility } from 'validation/validatePassword';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { IconButton } from '@mui/material';
import { InputAdornment } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const SignUpOrIn = ({ isSignUp }) => {
  const dispatch = useDispatch();

  const onSubmitRegister = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.fullname.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (validatePassword(password)) {
      dispatch(register({ name, email, password }));
      form.reset();
    } else {
      Report.warning(
        'The password must contain:',
        `At least 10 characters, at least one letter in lower case, at least one letter in upper case, at least one number or special character`
      );
    }
  };

  const onSubmitLogin = evt => {
    evt.preventDefault();
    const form = evt.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(logIn({ email, password }));
    form.reset();
  };

  const onClickPasswordVisibility = evt => {
    passwordVisibility(evt, 'regPasswordInput');
  };

  return (
    <Box
      sx={{
        width: 300,
        position: 'absolute',
        top: '150%',
        right: '50%',
        transform: 'translate(50%, 0)',
        padding: '16px 32px',
        background:
          'linear-gradient(90deg, var(--accent-pink), var(--accent-orange))',
        borderRadius: '5px',
      }}
    >
      <form onSubmit={isSignUp ? onSubmitRegister : onSubmitLogin}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
            marginBottom: '20px',
          }}
        >
          {isSignUp ? (
            <TextField
              type="text"
              name="fullname"
              label="Your username:"
              variant="filled"
              sx={{
                background: 'aliceblue',
              }}
              required
            />
          ) : (
            ''
          )}

          <TextField
            type="email"
            name="email"
            label="Your email:"
            variant="filled"
            sx={{
              background: 'aliceblue',
            }}
            required
          />
          <TextField
            id="regPasswordInput"
            type="password"
            name="password"
            label="Your password:"
            variant="filled"
            sx={{
              background: 'aliceblue',
            }}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={onClickPasswordVisibility}>
                    <VisibilityIcon className="hidden" />
                    <VisibilityOffIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: '150px',
              background: 'aliceblue',
              color: 'black',
              '&:hover': {
                background: 'var(--accent-grey)',
              },
            }}
          >
            {isSignUp ? 'Sign up' : 'Sign in'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
