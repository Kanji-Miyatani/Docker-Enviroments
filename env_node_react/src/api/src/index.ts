import express from "express";
import chat from "./lib/chat"
import cors from "cors";
const PORT = 3001;
const app = express();
const chatServer = chat(app);

app.use(cors());

 var server = app.listen(PORT,()=>{
    console.log(`Kchat server is listening on port ${PORT}`);
 })
 app.get('/',(req,res)=>{
    return res.send("<h1>KChatへようこそ!!!!</h1>");
 })
 

 