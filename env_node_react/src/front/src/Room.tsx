import { useParams } from "react-router-dom";
import { useRef } from "react";
import { Log } from "./interfaces/Chat";
import { useSockets } from "./lib/socket.context";
const Room = () => {
    const { roomId } = useParams<{ roomId: string }>();
    const { socket, messages, setMessages } = useSockets();

    const messageRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        const message = messageRef.current?.value;
        if (!String(message).trim()) return;

        socket.emit("sendMessage", message);
    }
    function pachinko() {
        const randInt  = (min:number, max:number) => Math.floor(Math.random() * (max + 1 - min)) + min;
        const num = randInt(1, 10)
        if(num == 1){
            console.log('Bonus')
        }
        else{
            console.log(JSON.stringify(num, null, '  '))
        }        
    }

    return (
        <>
            <h1>チャット部屋:ルーム{roomId}</h1>
            <ul>
                {
                    messages &&
                    messages.map((m, i) => {
                        return (
                            <li key={i}>{m.username}-{m.message}</li>
                        )
                    })
                }
            </ul>
            <input type="text" ref={messageRef} className="chat-input" /><button className="btn-send" onClick={handleClick}>送信</button>
            <button className="btn-send" onClick={pachinko}>うんだめし 1/10</button>
        </>
    )
}

export default Room;