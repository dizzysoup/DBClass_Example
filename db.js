const mariadb = require('mariadb');

const pool = mariadb.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'db_063'
});

module.exports = pool ; 