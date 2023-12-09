var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.getConnection()
  .then(conn => {
  
    conn.query("SELECT 1 as val")
      .then((rows) => {
        console.log(rows); //[ {val: 1}, meta: ... ]
        //Table must have been created before 
        // " CREATE TABLE myTable (id int, val varchar(255)) "
        
      })
      .then((res) => {
        console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
        conn.end();
      })
      .catch(err => {
        //handle error
        console.log(err); 
        conn.end();
      })
      
  }).catch(err => {
    //not connected
  });
  res.send('respond with a resource');
});

module.exports = router;
