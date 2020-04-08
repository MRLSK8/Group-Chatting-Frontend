import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5px;
  width: 40%;
  height: 95vh;
  background: linear-gradient(
    146.71deg,
    #dfdfdf -95.01%,
    rgba(223, 223, 223, 0) 100%
  );
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
