import {Server} from "socket.io";
import http from "http";
import { Express } from "express";

export default (app:Express)=>{

    const server = http.createServer(app);
    const io = new Server(server); 
    //接続確立
    io.on('connection',(socket)=>{
        console.log("user connected!");
        socket.on('disconnect', () => {
            console.log('user disconnected');
          });
    })
}
