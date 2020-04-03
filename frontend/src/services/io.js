import io from 'socket.io-client';
const ENDPOINT = 'localhost:3333';

export default io(ENDPOINT);
