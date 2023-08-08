import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
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

export const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
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
        `At least 8 characters, at least one letter in lower case, at least one letter in upper case, at least one number or special character`
      );
    }
  };

  const onClickPasswordVisibility = evt => {
    passwordVisibility(evt, 'regPasswordInput');
  };

  return (
    <Box
      sx={{
        width: 300,
        paddingLeft: '40px',
        paddingTop: '40px',
      }}
    >
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
            marginBottom: '20px',
          }}
        >
          <TextField
            type="text"
            name="fullname"
            label="Your username:"
            variant="filled"
            required
          />
          <TextField
            type="email"
            name="email"
            label="Your email:"
            variant="filled"
            required
          />
          <TextField
            id="regPasswordInput"
            type="password"
            name="password"
            label="Your password:"
            variant="filled"
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
              background: 'var(--accent-pink)',
              '&:hover': {
                background: 'var(--accent-orange)',
              },
            }}
          >
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};
