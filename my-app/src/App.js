import React, { useState } from 'react';
import './App.css';
import Books from './BookList';
import AddForm from './AddForm';
import Popup from './Popup'
function App() {
  const [books, setBooks] = useState([
    {id:1, content : "book1 book1  book1  book1  book1  book1  book1  book1  book1  book1  book1  book1  book1  book1 ", title : "book1"},
    {id:2, content : "book2 book2 book2 book2 book2 book2 book2 book2 book2 book2 book2 book2 book2 book2 book2 book2 book2 ", title : "book2"},
    {id:3, content : "book3 book3book3  book3book3book3  book3book3book3book3book3 book3book3book3book3",title : "book3"},
    {id:4, content : "book4 book4 book4 book4 book4book4 book4book4 book4book4 book4book4",title : "book4"},
    {id:5, content : " book5 book5 book5 book5 book5 book5book5book5 book5 book5",title : "book5"},
    {id:6, content : "book6  book6 book6book6 book6book6book6",title : "book6"},
  ]);

  const deleteBook = (id) => {
    const booksNew = books.filter(book =>{
      return book.id !==id
    });
    setBooks(booksNew);
  }

  const addBooks = (content,title) => {
    let newData ={
      id : Math.random(),
      content : content,
      title : title
    }

    let booksNew = [...books,newData];
    setBooks(booksNew);
  }

  const filterList = (event) => {
    var updatedBooks = books;
    updatedBooks = updatedBooks.filter(function(item){
      console.log(item)
      return item.content.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    setBooks(updatedBooks);


  }

  return (
    <div className="App container">
      <h1 className="center blue-text">Books</h1>
      <input type="text" placeholder="Search" onChange={(e) =>filterList(e)}/>

      <Books Books={books} deleteBook={deleteBook} />
      <AddForm addBooks={addBooks}/>
    </div>
  );
}



export default App;
