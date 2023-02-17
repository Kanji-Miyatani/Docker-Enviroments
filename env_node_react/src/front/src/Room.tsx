import { useParams } from "react-router-dom";
import { useRef ,useState} from "react";
import { Log } from "./interfaces/Chat";
import { useSockets } from "./lib/socket.context";
import React, { Component } from 'react'
import ReactDOM from "react-dom";
const Room = () => {
    const { roomId } = useParams<{ roomId: string }>();
    const { socket, messages, setMessages } = useSockets();
    const [logs, setLogs] = useState<string[]>([]);
    const messageRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        const message = messageRef.current?.value;
        if (!String(message).trim()) return;

        socket.emit("sendMessage", message);
    }

    function pachinko(type: string) {

        let gamecount: number = 0;
        let bonusflg: boolean = false
        let tousimoney: number
        let num: number = 0
        const randInt = (min: number, max: number) => Math.floor(Math.random() * (max + 1 - min)) + min;
        while (bonusflg == false) {
            if (type == "ama") {
                num = randInt(1, 99)
            }
            else {
                num = randInt(1, 319)
            }
            gamecount++;

            if (num == 1) {
                bonusflg = true;
            }
        }

        tousimoney = gamecount * 55;
        const log = `${gamecount}回であたた! 1k18回転だと仮定すると、投資 ${tousimoney}円くらいで当たったみたいです`;
        
        setLogs([...logs,log]);
        console.log();
    }

    return (
        <>
            <h1>チャット部屋:ルーム{roomId}</h1>
            <ul>
                {
                    logs &&
                    logs.map((log, i) => {
                        return (
                            <li style={{ color: '#000' }} key={i}>{log}</li>
                        )
                    })
                }
            </ul>
            <input type="text" ref={messageRef} className="chat-input" /><button className="btn-send" onClick={handleClick}>送信</button>
            <button className="btn-send" onClick={() => pachinko("middle")} data-num="middle">うんだめし 1/319</button>
            <button className="btn-send" onClick={() => pachinko("ama")} data-num="ama">うんだめし 1/99</button>
        </>
    )
}

export default Room;