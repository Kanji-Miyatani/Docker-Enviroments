import express from "express"
const PORT = 3001;
const app = express();
 var server = app.listen(PORT,()=>{
    console.log(`Kchat server is listening on port ${PORT}`);
 })
 app.get('/',(req,res)=>{
    return res.send("<h1>KChatへようこそ。</h1>");
 })