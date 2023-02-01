//Chatのログ
export interface Log{
    messages:Array<Message>
}
//メッセージ
export interface Message{
    user:User,
    message:string,
    sendat:Date
}
//ユーザー
export interface User{
    name :string
}
