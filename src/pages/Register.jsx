import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
            type="password"
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
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};
