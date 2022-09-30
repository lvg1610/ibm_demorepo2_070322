import React from 'react';
import ShowBook from './showbook';
import bookData from './bookdata';
import CrudBook from './crudbook';
import Book from './book';
import BookService from './bookservice';
import {Link,Outlet} from 'react-router-dom';
class ShowBookList extends React.Component
{
    constructor(props)
    {
       super(props);
       this.state={bookList:[]}
    } 
    removeBook = (bookId) => {
            
    }

    addBook = (bookId,bookTitle,bookAuthor,bookPrice) => {
        BookService.insertBook(new Book(bookId,bookTitle,bookAuthor,bookPrice)).then();
    }
 
    getAllBooks = () => {
        BookService.getAllBooks().then((response)=> this.setState({bookList:response.data}));
    } 

    getBookDetails = (bookId) => {
        return BookService.getBookByBookId(bookId);         
    }

   
    render()
    {
       return(  
               <div> 
                <CrudBook  addBookEvent={this.addBook}    getBookByIdEvent={this.getBookDetails}/>
                <hr/> 
                <input type="button" value="Display Books"  onClick={this.getAllBooks}/>
                <table border="1"  align="center">
                    <tr>
                       <th>Book Id</th>
                       <th>Book Title</th> 
                       <th>Book Author</th>
                       <th>Book Price</th>
                       <th>Action</th>
                    </tr>
                    <tbody>
  {this.state.bookList.map((book)=> <ShowBook book={book}   deleteBook={this.removeBook} />)}
                    </tbody>
                </table>
                <Outlet/>
               </div> 
             );
    } 
}
export default ShowBookList;
     