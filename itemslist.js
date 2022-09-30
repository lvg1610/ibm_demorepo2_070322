import React , {Component } from 'react';
export default class ItemsList extends Component
{
     constructor(props)
     {
         super(props);
     }
     render()
     {
         return(
                   <ul>
                       this.props.items.map((item) => {item})
                   </ul>
                );
     }
}

       