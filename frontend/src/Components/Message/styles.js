import styled, { css } from 'styled-components';

const GenericDiv = css`
  max-width: 85%;
  padding: 10px 15px;
  line-height: 1.6em;
  border-radius: 10px;
  margin: 5px 20px;
  overflow-wrap: break-word;
  background: #f5f5f5;

  p {
    color: #343434;
    font-weight: 500;
  }
`;

export const OthersUserMessages = styled.div`
  display: flex;
  justify-content: flex-start;

  div {
    ${GenericDiv}

    h5 {
      font-style: italic;
      text-transform: capitalize;
      font-weight: normal;
      font-size: 14px;
      color: #bdc3c7;
    }
  }
`;

export const UserMessages = styled.div`
  display: flex;
  justify-content: flex-end;

  div {
    ${GenericDiv}
  }
`;

export const AdminMessages = styled.div`
  display: flex;
  justify-content: center;

  div {
    ${GenericDiv}
    
    background: linear-gradient(
      174.08deg,
      rgba(14, 52, 160, 0) -12.8%,
      #0e34a0 122.79%
    );

    p {
      color: #f5f5f5;
    }
  }
`;
