import { Route, Routes } from 'react-router-dom';
import { Contacts } from '../../pages/Contacts';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Contacts />} />
      </Routes>
    </div>
  );
};
