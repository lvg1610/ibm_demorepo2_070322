import React , {Component} from 'react';
import Item from './item';
export default class ItemsList extends Component
{
     
     render()
     {
         return(
                   <ul>Items
                       {this.props.items.map((item) => <Item value={item}/>)}
                   </ul>
                );
     }
}



       