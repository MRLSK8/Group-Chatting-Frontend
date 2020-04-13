import styled from 'styled-components';

export const Container = styled.div`
  width: 20%;
  height: 90vh;
  border-radius: 8px;
  margin-right: 10px;

  background: linear-gradient(
    146.71deg,
    #dfdfdf -95.01%,
    rgba(223, 223, 223, 0) 100%
  );
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.45);

  @media (max-width: 1050px) {
    width: 30%;
  }

  @media (max-width: 900px) {
    width: 35%;
  }

  @media (max-width: 700px) {
    display: ${(props) => props.display || 'none'};
    width: ${(props) => `${props.width}%`};
  }
`;

export const UsersInTheRoomHeader = styled.div`
  width: 100%;
  height: 9%;
  min-height: 50px;
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
`;

export const UsersInRoomList = styled.div`
  height: calc(100% - 8%);
  overflow-y: auto;
  margin-right: 2px;

  ul {
    li {
      div {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #bdc3c7;
        padding: 15px;

        h5 {
          font-size: 14px;
          text-transform: capitalize;
        }
      }
    }
  }
`;

export const Avatar = styled.section`
  margin-right: 10px;
`;
