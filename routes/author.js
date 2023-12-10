var express = require('express');
var db = require('../db');
var router = express.Router();

// Select ALL
router.get('/', async function(req, res, next) {
    const con = await db;
    const rows = await con.query('SELECT * from  Author ;');
    console.table(rows);

    res.render("author",{title:"Author", authors : rows});
  });


// Select by pNO
router.get('/pNo', async function(req, res, next) {
  pNo = req.query.pNo ; 
  const con = await db;
  const rows = await con.query('SELECT * from  Author where pNo = (?);',pNo);
  console.table(rows);

  res.render("author",{title:"Author", authors : rows});
});
  

// Insert 
router.post('/', async (req, res) => {
  const authorName = req.body.authorname;
  const pNo  = req.body.pNo;

  try {
      const con = await db;
      const result = await con.query('INSERT INTO Author (pNo, name) VALUES (?, ?)', [pNo, authorName]);
      console.log('Insert author Success :', pNo);
      res.redirect('/author');
  } catch (error) {
      console.error('Error inserting author:', error);
      res.status(500).send('Internal Server Error');
  }
});


//Delete 
router.delete('/' ,  async (req,res) => {
  const pNo = req.body.authorId;
  const con = await db;
  const result = await con.query('Delete from  Author where pNo = (?)', [pNo]);
  console.log('Delete author Success:', pNo);
  res.redirect('/author');
});


module.exports = router;