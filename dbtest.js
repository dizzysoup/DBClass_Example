const mariadb = require('mariadb');

async function CreateConnection() {
    try {
        // 建立與資料庫的連接
        const connection = await mariadb.createConnection({
            host: 'localhost',
            user: 'user',
            password: 'password',
            database: 'db_063'
        })
        const [rows, fields] = await connection.query('SELECT "DBConnectTest" as val ');
        console.log(rows);
        // 關閉連接
        connection.end()

      } catch (error) {
        console.error('連接數據庫時出現錯誤：', error)
      }
}

CreateConnection();