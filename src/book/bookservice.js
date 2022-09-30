import axios from 'axios';
export default class BookService
{
   static getAllBooks()
   {
       return axios.get('http://localhost:8089');
   }

   static getBookByBookId(bookId:string)
   {
       return axios.get('http://localhost:8089/'+bookId);
   }

   static insertBook(book)
   {
       return axios.post('http://localhost:8089',book);
   } 
}