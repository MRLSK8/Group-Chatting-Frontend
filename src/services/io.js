import io from 'socket.io-client';

const type = 'deploy';

const ENDPOINT =
  type === 'deploy'
    ? 'https://group-chatting-k8.herokuapp.com/'
    : 'http://localhost:3333';

export default io(ENDPOINT);
