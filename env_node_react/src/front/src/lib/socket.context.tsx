import { useContext, createContext, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { SOCKET_URL } from './config';

interface Context {
    socket: Socket,
    setUsername: Function
    messages?: {message: string, username: string, time: string}[],
    setMessages: Function
}

//SOCKET_URLの中身のところに接続を要求
const socket = io(SOCKET_URL);
//createContextでどの階層のコンポーネントからでもSocket.ioを使用できる。
const SocketContext = createContext<Context>({
    socket, 
    setUsername: () => false ,
    setMessages: () => false
});

function SocketsProvier(props: any) {
    const [messages, setMessages] = useState([]);

    return (
        <SocketContext.Provider value={{ socket, messages, setMessages }} {...props} />
    );
}

export const useSockets = () => useContext(SocketContext);

export default SocketsProvier;