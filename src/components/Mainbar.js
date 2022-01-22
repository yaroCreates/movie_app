import React from 'react';
import './Mainbar.css'
import Moviecard from './Moviecard';

function Mainbar({ items }) {

    return (
        <div className='mainbar'>
            <div className='mainbar_header'>
                
            </div>
            <div className='movie'>
            {items.map(item => (
                <Moviecard key={item.id} item={item}/>
            ))}
        </div>
        </div>
    )


}

export default Mainbar;
