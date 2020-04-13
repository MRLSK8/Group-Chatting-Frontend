import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
 `;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
  padding-top: 40px;

  width: 30%;
  height: 100vh;
  max-height: 440px;
  max-width: 400px;
  background: linear-gradient(
    141.11deg,
    rgba(189, 195, 199, 0) -6.26%,
    #bdc3c7 100.71%
  );

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 810px) {
    width: 85%;
  }

  @media (max-width: 580px) {
    width: 85%;
  }

  @media (max-width: 450px) {
    width: 90%;
  }

  @media (max-width: 400px){
    height: 90vh;
  }
`;

export const Title = styled.h1`
  color: #343434;
  font-size: 35px;
  font-weight: normal;
  margin-top: 10px;

  span {
    color: #2f3061;
    border-bottom: 2px solid #2f3061;
    padding-bottom: 10px;
  }

  @media (max-width: 450px) {
    font-size: 34px;
  }

  @media (max-width: 360px) {
    font-size: 32px;
  }

  @media (max-width: 290px) {
    font-size: 26px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 35px;
  width: 100%;

  input[type='text'] {
    padding: 10px 15px;
    border: 0;
    border-radius: 3px;
    width: 65%;
    margin: 8px auto;
    background-color: #f5f5f5;
    transition: border 0.2s;

    @media (max-width: 380px) {
      width: 80%;
    }

    @media (max-width: 290px) {
      width: 90%;
    }
  }

  input[type='text']:focus {
    box-shadow: 1px 1px 5px #2f3061;
  }

  button {
    border: 0;
    border-radius: 50px;
    padding: 8px;
    background-color: #2f3061;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 14px;
    color: #f5f5f5;
    text-transform: uppercase;
    margin-top: 15px;
    width: 55%;
    cursor: pointer;
    transition: filter 0.5s;

    @media (max-width: 370px) {
      width: 65%;
    }

    @media (max-width: 290px) {
      width: 75%;
    }
  }

  button:hover {
    filter: brightness(0.8);
  }
`;

export const GenderOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  input[type='radio'] {
    cursor: pointer;
    margin-left: 10px;
  }

  input[type='radio']:after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 8px;
    position: relative;
    background: white;
    display: inline-block;
    border: 3px solid white;
  }

  input[type='radio']:checked:after {
    content: '';
    width: 8px;
    height: 8px;
    position: relative;
    background-color: #2f3061;
    display: inline-block;
    border: 3px solid white;
  }

  label {
    margin-left: 8px;
    margin-right: 20px;
    cursor: pointer;
  }
`;

export const UserNameAlreadyExist = styled.h4`
  color: #d63031;
  font-weight: 500;
  margin-bottom: 2px;
`;
