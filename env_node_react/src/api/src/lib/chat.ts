import {Server} from "socket.io";
import http from "http";
import { Express } from "express";
import mysql from "../db/mysql";
import { User } from "../interfaces/Chat";

export default (app:Express)=>{

    const server = http.createServer(app);
    const io = new Server(server); 
    //接続確立
    io.on('connection',(socket)=>{
        console.log("user connected!");
        //接続を切る
        socket.on('disconnect', () => {
            console.log('user disconnected');
          });
        //チャットルームに参加
        socket.on('join',(msg)=>{
            console.log(msg);
            const repo =mysql();
            const newUser :User={
                id : 1,
                name : msg.UserName,
                roomId : msg.roomId
            } 
            repo.entryRoom(msg)
            socket.join(msg.roomid);
        });
    })

    //チャット
}
