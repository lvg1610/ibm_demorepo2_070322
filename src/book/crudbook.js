import React from 'react';
export default class CrudBook extends React.Component
{
    constructor(props)
    {
        super(props);
        this.bookId = React.createRef();
        this.bookTitle = React.createRef();
        this.bookAuthor = React.createRef();
        this.bookPrice = React.createRef(); 
    }
     
    getBookById = (bookId) => {
         
        this.props.getBookByIdEvent(bookId).then((response) => {this.bookTitle.current.value=response.data.bookTitle;this.bookAuthor.current.value=response.data.bookAuthor;this.bookPrice.current.value=response.data.bookPrice}); 
    }
    render()
    {
        return(
                 <table align="center" width="50%" border="1">
                             <caption>Book Form</caption>
                      <tr>
                         <th>Book Id</th>
                         <td><input type="text"  ref={this.bookId} /></td>
                      </tr>
                      <tr>
                         <th>Book Title</th>
                         <td><input type="text" ref={this.bookTitle}/></td>
                      </tr>
                      <tr>
                         <th>Book Author</th>
                         <td><input type="text" ref={this.bookAuthor}/></td>
                      </tr>
                      <tr>
                         <th>Book Price</th>
                         <td><input type="text" ref={this.bookPrice}/></td>
                      </tr> 
                      <tr>
                         <td><input type="button"  value="Add Book" onClick={()=>this.props.addBookEvent(this.bookId.current.value,this.bookTitle.current.value,this.bookAuthor.current.value,this.bookPrice.current.value)}/></td>
                         <td><input type="button"  value="Delete Book"/></td>
                      </tr>
                      <tr>

                         <td><input type="button"  value="Get Book"   onClick={()=>this.getBookById(this.bookId.current.value)}/></td>

                         <td><input type="button"  value="Modify Book"/></td>
                      </tr>
                 </table>
              );
    } 
}