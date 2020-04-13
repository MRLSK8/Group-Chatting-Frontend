import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: none;
`;

export const ChatArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5px;
  width: 40%;
  height: 90vh;
  background: linear-gradient(
    146.71deg,
    #dfdfdf -95.01%,
    rgba(223, 223, 223, 0) 100%
  );
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.45);
  border-radius: 8px;

  @media (max-width: 1050px) {
    width: 50%;
  }

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }

`;
