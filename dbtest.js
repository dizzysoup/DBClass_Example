const mariadb = require('mariadb');
var db = require('./db');


async function CreateConnection() {
    try {
        const con = await db ; 
        const [rows, fields] = await con.query('SELECT "DBConnectSuccess" as val ');
        console.log(rows);
        // 關閉連接
        con.end()

      } catch (error) {
        console.error('連接數據庫時出現錯誤：', error)
      }
}

CreateConnection();