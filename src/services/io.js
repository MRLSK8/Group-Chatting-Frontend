import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:3333';

export default io(ENDPOINT);
