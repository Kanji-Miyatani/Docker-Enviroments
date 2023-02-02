import mysql from "mysql";
import {User} from "../interfaces/Chat"
export default()=>{
    //接続確立
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3008,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_ROOT_PASSWORD,
        database:  process.env.MYSQL_DATABASE
      });
    connection.connect((err) => {
    if (err) {
        console.log('error mysql connecting: ' + err.stack);
        return;
    }
      console.log('mysql connected!');
    });

    return{
        //チャットのログをすべて取得
        selectAllLogs : <T>() :Array<T> =>{
          connection.query(
              'SELECT * FROM items',
              (error, results : Array<T>) => {
                return results;
              }
            );
          return new Array<T>();
        },
        //ルームにユーザーを入室
        entryRoom : (user: User,)=>{
            connection.query("INSERT into User",user);
        },

    }
}