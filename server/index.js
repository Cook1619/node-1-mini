const express = require('express');
const bodyParser = require('body-parser');
const booksController = require('./controllers/books_controller.js');

const app = express();

app.use(bodyParser.json());
app.get('/api/books', booksController.read);
app.post('/api/books', booksController.create);
app.put('/api/books/:id', booksController.update);
app.delete('/api/books/:id', booksController.delete);

const port = 3000;
app.listen( port, () => {console.log(`Server is listening on port ${port}`); } );