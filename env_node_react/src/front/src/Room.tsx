import { useParams } from "react-router-dom";
import {useRef} from "react";
import { Log } from "./interfaces/Chat";
import { useSockets } from "./lib/socket.context";
const Room = ()=>{
    const { roomId } = useParams<{roomId: string}>();
    const {socket,messages,setMessages} = useSockets();
    
    const messageRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        const message = messageRef.current?.value;
        if (!String(message).trim()) return;
    
        socket.emit("sendMessage", message);
      }
    
    return(
        <>
            <h1>チャット部屋:ルーム{roomId}</h1>
            <ul>
                {
                    messages &&
                    messages.map((m,i)=>{
                        return(
                            <li key={i}>{m.username}-{m.message}</li>
                        )
                    })
                }
            </ul>
            <input type="text" ref={messageRef} className="chat-input"  /><button className="btn-send" onClick={handleClick}></button>
        </>
    )
}

export default Room;