import { useParams } from "react-router-dom";
import { Log } from "./interfaces/Chat";
const Room = ({messages}:Log)=>{
    const { roomId } = useParams<{roomId: string}>();
    return(
        <>
            <h1>チャット部屋:ルーム{roomId}</h1>
            <ul>
                {
                    messages.map((m)=>{
                        return(
                            <li>{m.user.name}-{m.message}</li>
                        )
                    })
                }
            </ul>
            <input type="text" className="chat-input"  />
        </>
    )
}

export default Room;