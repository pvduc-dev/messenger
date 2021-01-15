import socketIoClient from 'socket.io-client';

const socket = socketIoClient.connect({
  host: process.env.SOCKET_IO_URL
})

export {socket}
