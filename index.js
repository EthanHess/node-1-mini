const express = require('express'); 
const bodyParser = require('body-parser'); 
const booksController = require('./controllers/books_controller'); 

const app = express(); 
app.use(bodyParser.json()); 

//Put completely overwrites
//Patch updates one part/property (only works on existing endpoint)
app.get('/api/books', booksController.getBooks); 
app.post('/api/books', booksController.createBook); 
app.delete('/api/books/:id', booksController.deleteBook); 
app.put('/api/books/:id', booksController.updateBook); 

const port = 3000; 
app.listen(port, () => {
    console.log(`I'm listening on port ${port}`); 
}); 