import styled from 'styled-components';

export const ContainerForm = styled.form`
  position: relative;
  
  input {
    background: #f5f5f5;
    border-radius: 50px;
    border: 0;
    padding: 15px 20px;
    width: 100%;
    font-size: 15px;
  }

  button {
    cursor: pointer;
    position: absolute;
    right: 25px;
    top: 13px;
    border: 0;
    background: transparent;
  }
`;
