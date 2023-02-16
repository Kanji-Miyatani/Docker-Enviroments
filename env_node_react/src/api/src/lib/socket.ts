import { Server, Socket } from "socket.io";

function socket({io}: {io: Server}){
    console.log("socket up");
    io.on("connection", (socket: Socket) => {
        console.log(`User connected ${socket.id}`);

        socket.on("sendMessage", (message) => {
            socket.emit("responseMessage", message);
        });
    });
}

export default socket;