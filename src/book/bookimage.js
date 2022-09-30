import React from 'react';
import {useParams} from 'react-router-dom';
function BookImage()
{
    const {bookId} = useParams();
    
       return (<div><h1>Book Image</h1>
                   <img src={require('./'+bookId+'.jpg')} width="300"  height="400"/>
              </div>);  
    
}
export default BookImage;
