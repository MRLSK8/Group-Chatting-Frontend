import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);

  width: 30%;
  height: 65vh;
  max-height: 500px;
  max-width: 500px;
  background: linear-gradient(141.11deg, rgba(189, 195, 199, 0) -6.26%, #BDC3C7 100.71%);

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
`;

export const Title = styled.h1`
  color: #343434;
  font-size: 40px;
  font-weight: normal;
  margin-top: 15px;

  span {
    color: #2f3061;
    border-bottom: 2px solid #2f3061;
    padding-bottom: 15px;
  }

  @media (max-width: 450px) {
    font-size: 38px;
  }

  @media (max-width: 360px) {
    font-size: 32px;
  }

  @media (max-width: 290px) {
    font-size: 22px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 45px;
  width: 100%;

  input {
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

  input:focus {
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
