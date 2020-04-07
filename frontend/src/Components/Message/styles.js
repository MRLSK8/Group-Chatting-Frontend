import styled from 'styled-components';

export const AdminMessage = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    color: #2f3061;
  }
`;

export const UserMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;

  h2 {
    color: red;
  }
`;
