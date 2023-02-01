import {Server} from "socket.io";
import http from "http";
import { Express } from "express";

export default (app:Express)=>{

    const server = http.createServer(app);
    const { Server } = require("socket.io");
    const io = new Server(server); 
    
}
