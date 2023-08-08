import { styled } from 'styled-components';

const Greetings = styled.div`
  position: absolute;
  top: 100%;
  right: 50%;
  transform: translate(50%, 200%);
  width: 600px;
  height: 100px;
  background: linear-gradient(90deg, var(--accent-pink), var(--accent-orange));
  box-shadow: var(--accent-shadow-dark);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Home = () => {
  return (
    <>
      <Greetings>
        <p>Welcome to the homepage of the phonebook!</p>
      </Greetings>
    </>
  );
};
