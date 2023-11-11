import { styled } from 'styled-components';

const Greetings = styled.div`
  position: absolute;
  top: 100%;
  right: 50%;
  transform: translate(50%, 200%);
  background: linear-gradient(90deg, var(--accent-pink), var(--accent-orange));
  box-shadow: var(--accent-shadow-dark);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 300px;
  height: 75px;
  font-size: 14px;

  @media (min-width: 768px) {
    width: 500px;
    height: 100px;
    font-size: 22px;
  }
`;

export const Home = () => {
  return (
    <>
      <Greetings>
        <p>Welcome to the phonebook homepage!</p>
      </Greetings>
    </>
  );
};
