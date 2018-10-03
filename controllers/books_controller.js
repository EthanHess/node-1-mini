const books = []; 
let id = 0; 

module.exports = {
    getBooks: (req, res) => {
        res.json(books); 
    },
    // getBook: ,
    createBook: (req, res) => {
        const { title, author } = req.body; 
        const newBook = { 
            title, 
            author, 
            id
        }; 
        id++; //id = id + 1; 
        console.log('newBook', newBook); 
        books.push(newBook); 
        res.json(books); 
    },
    updateBook: (req, res) => {
        const bookId = req.params.id; //id matches id param
        const indexOfBook = books.findIndex(book => book.id === parseInt(bookId)); //can also do +
        console.log('indexOfBook', indexOfBook); 
        if (indexOfBook === -1) {
            res.status(404).send(`A book with id ${bookId} doesn't exist`); 
        } else {
            books[indexOfBook] = { ...req.body, id: books[indexOfBook].id }; 
            res.json(books); 
        }
        
    }, 
    deleteBook: (req, res) => {
        const bookId = req.params.id; //id matches id param
        const indexOfBook = books.findIndex(book => book.id === parseInt(bookId)); //can also do +
        console.log('indexOfBook', indexOfBook); 
        if (indexOfBook === -1) {
            res.status(404).send(`A book with id ${bookId} doesn't exist`); 
        } else {
            books.splice(indexOfBook, 1); 
            res.json(books); 
        }
    },
}