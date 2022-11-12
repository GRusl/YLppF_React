const express = require('express');
const DB = require('./database');
const port = 3001;

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/test', (req,res) => {
    res.send('Everything is OK!')
})

app.get('/full-data', (req,res) => {
    res.send(DB)
})

app.get('/genres', (req,res) => {
    const genres = DB.map(item => {
        return {id: item.id, name: item.name, books: item.books}
    })
    res.send(genres)
})

app.get('/genres/:id', (req,res) => {
    const genre = DB.find(item => item.id === req.params.id)
    res.send(genre.books)
})

app.get('/books/:id', (req,res) => {
    const arr = []
    DB.forEach(item => {
        item.books.forEach(book => {
            arr.push(book)
        })
    })
    const result = arr.find(e => e.id === req.params.id)
    res.send(result)
})

app.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});
