import React from 'react';

const Books = ({Books, deleteBook}) => {
    console.log(Books)
    const bookList = Books.length ? (
        
        Books.map(book => {
           return (
               <div>
   
                <div className="row" key={book.id}>
                    <div className="col s12 m12" key={book.id}>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">{book.title}</span>
                        <p>{book.content}</p>
                        </div>
                        <div className="card-action">
                        <button className="waves-effect waves-light btn" onClick={() => {deleteBook(book.id)}}>Edit</button>
                        <button className="waves-effect waves-light btn" onClick={() => {deleteBook(book.id)}}>Delete</button>
                        </div>
                    </div>
                    </div>
                </div>


  
             </div>

           )
       })
    ) : (
        <p>You have no books left</p>
    );

    return (
        <div className="Books collection">
            {bookList}
        </div>
    )
}

export default Books;