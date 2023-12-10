var express = require('express');
var db = require('../db');
var router = express.Router();

router.get('/', async function(req, res, next) {
    const con = await db;
    const rows = await con.query('SELECT * from  Author ;');
    console.table(rows);

    res.render("author",{title:"Author", authors : rows});
  });
  
  module.exports = router;