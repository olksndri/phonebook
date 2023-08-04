import css from '../styles/app.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label htmlFor="name-input">Name</label>
      <input
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id="name-input"
        required
      />
      <label htmlFor="number-input">Number</label>
      <input
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        id="number-input"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
