import AtomicSpinner from 'atomic-spinner';
import css from './Loading.module.css';
import PropTypes from 'prop-types';

export const Loading = ({ text }) => {
  return (
    <div className={css.atom}>
      <span>{text}</span>
      <AtomicSpinner
        electronPathCount="3"
        electronSize={2}
        nucleusParticleFillColor="black"
      />
    </div>
  );
};

Loading.propTypes = {
  text: PropTypes.string,
};
