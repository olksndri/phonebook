import AtomicSpinner from 'atomic-spinner';
import css from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={css.atom}>
      <AtomicSpinner
        electronPathCount="3"
        electronSize={2}
        nucleusParticleFillColor="black"
      />
    </div>
  );
};
