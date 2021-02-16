import React, { FunctionComponent, useEffect } from 'react';
import { SocketProvider, socket } from '@/plugins/socket-io';
import Login from '@/pages/Login';


const App: FunctionComponent = () => {
  useEffect((): void => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  });
  return (
    <SocketProvider
      value={socket}
    >
      <Login />
    </SocketProvider>
  );
};

export default App;
