import express from "express";
import chat from "./lib/chat";
import { createServer } from "http";
import cors from "cors";
const PORT = 3001;
const app = express();
const chatServer = 

app.use(cors());

 var server = createServer(app);
 app.get('/',(req,res)=>{
    return res.send("<h1>KChatへようこそ!!!!</h1>");
 })

 server.listen(PORT, () =>{  
   console.log(`KChatServer is listening on ${PORT}`);   
   chat(server);
});