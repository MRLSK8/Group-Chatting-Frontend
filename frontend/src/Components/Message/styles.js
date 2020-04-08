import styled from 'styled-components';

export const OthersMessage = styled.div`
  display: flex;
  justify-content: flex-start;

  div {
    max-width: 85%;
    background: #f5f5f5;
    padding: 10px 15px;
    line-height: 1.6em;
    border-radius: 10px;
    margin: 5px 20px;
    overflow-wrap: break-word;

    h5 {
      font-style: italic;
      text-transform: capitalize;
      font-weight: normal;
      font-size: 14px;
      color: #bdc3c7;
    }

    p {
      color: #343434;
      font-weight: 500;
    }
  }
`;

export const UserMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  div {
    max-width: 85%;
    background: #f5f5f5;
    padding: 10px 15px;
    line-height: 1.6em;
    border-radius: 10px;
    margin: 5px 20px;
    overflow-wrap: break-word;

    p {
      color: #343434;
      font-weight: 500;
    }
  }
`;
