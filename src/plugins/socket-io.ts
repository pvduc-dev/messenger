import socketIoClient from 'socket.io-client';
import { createContext } from 'react';

interface Emitter {
  on( event: string, fn: Function ):Emitter;

  addEventListener( event: string, fn: Function ):Emitter;

  once( event: string, fn: Function ):Emitter;

  off( event: string, fn?: Function ):Emitter;

  removeListener( event: string, fn?: Function ):Emitter;

  removeEventListener( event: string, fn?: Function ):Emitter;

  removeAllListeners():Emitter;

  emit( event: string, ...args: any[] ):Emitter;

  listeners( event: string ):Function[];

  hasListeners( event: string ):boolean;
}

export interface Socket extends Emitter {

  nsp: string;

  id: string;

  connected: boolean;

  disconnected: boolean;

  binaryType: "blob" | "arraybuffer";

  open(): Socket;

  connect(): Socket;

  send( ...args: any[] ):Socket;

  emit( event: string, ...args: any[] ):Socket;

  close():Socket;

  disconnect():Socket;

  compress(compress: boolean):Socket;
}

export const socket: Socket = socketIoClient(process.env.SOCKET_IO_URL as string, {
  transports: ['websocket']
});
export const SocketContext = createContext<Socket>({} as Socket);
export const SocketProvider = SocketContext.Provider;
export const SocketConsumer = SocketContext.Consumer;
