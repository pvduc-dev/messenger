import React, { FunctionComponent } from 'react';
import socketIoClient from 'socket.io-client';

const App: FunctionComponent = () => {
  socketIoClient.connect({
    host: 'http://localhost:3030',
    transports: ['websocket']
  })
  return (
    <>1</>
  );
};

export default App;
