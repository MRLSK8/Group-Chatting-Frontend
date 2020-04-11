import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: #2f3061;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;

  H2 {
    font-size: 14px;
    color: #f5f5f5;
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  div:hover {
    cursor: not-allowed;
  }
`;
