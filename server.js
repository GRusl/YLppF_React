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
    var data = {}
    for (const book_ of genre.books) {
        data[book_.id] = data
    }
    res.send(data)
})

app.get('/books', (req,res) => {
    let books = []
    for (const genre of DB) {
        for (const book of genre.books) {
            books.push(book)
        }
    }
    res.send(books)
})

app.get('/books/:id', (req,res) => {
    let break_ = false
    let book
    for (const genre of DB) {
        for (const book_ of genre.books) {
            if (book_.id === req.params.id) {
                book = book_

                break_ = true
                break
            }
        }
        if (break_) {
            break
        }
    }
    res.send([book])
})

app.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});
