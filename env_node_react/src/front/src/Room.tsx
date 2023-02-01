import { Log } from "./interfaces/Chat";
const Room = ({messages}:Log)=>{
    return(
        <>
            <h1>チャット部屋</h1>
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