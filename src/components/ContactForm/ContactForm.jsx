import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export const ContactForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <div className={css['input-wrap']}>
        <TextField
          type="text"
          id="name-input"
          name="name"
          label="Name"
          variant="filled"
          required
        />
        <TextField
          type="tel"
          name="number"
          label="Number"
          variant="filled"
          pattern="[A-Za-z]+"
          title="Three letter country code"
          required
        />
      </div>
      <Button
        variant="contained"
        type="submit"
        sx={{
          background: 'var(--accent-pink)',
          '&:hover': {
            background: 'var(--accent-orange)',
          },
        }}
      >
        Add contact
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
