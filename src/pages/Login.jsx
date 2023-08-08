import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
    <Box
      sx={{
        ['max-width']: 300,
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
            type="email"
            name="email"
            label="Your email:"
            variant="filled"
            required
          />
          <TextField
            type="password"
            id="password"
            name="password"
            label="Your password:"
            variant="filled"
            required
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
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};
