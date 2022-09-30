import React from 'react';
import {Link} from 'react-router-dom';
class ShowBook extends React.Component
{
    render()
    {
       return(
                <tr>
                    <td><Link to={this.props.book.bookId}>{this.props.book.bookId}</Link></td>
                    <td>{this.props.book.bookTitle}</td>
                    <td>{this.props.book.bookAuthor}</td>
                    <td>{this.props.book.bookPrice}</td>
                    <td><input type="button"   value="Delete"  onClick={()=>this.props.deleteBook(this.props.book.bookId)}/></td>
                </tr> 
             ); 
    }
}
export default ShowBook;
                   
      //<ShowBook        deleteBook(7002)/>


          