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
        let gamecount: number = 0;
        let bonusflg: boolean = false
        let tousimoney:number
        const randInt = (min: number, max: number) => Math.floor(Math.random() * (max + 1 - min)) + min;
        while (bonusflg == false) {
            const num = randInt(1, 319)

            gamecount++;

            if (num == 1) {
                bonusflg = true;
            }
        }
        tousimoney = gamecount * 55
        console.log(gamecount + '回であたた! 1k18回転だと仮定すると、投資' + tousimoney + '円くらいで当たったみたいです');
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
            <button className="btn-send" onClick={pachinko}>うんだめし 1/319</button>
        </>
    )
}

export default Room;