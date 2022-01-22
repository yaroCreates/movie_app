import React from 'react';
import './Mainbar.css'
import Moviecard from './Moviecard';

function Mainbar({ items }) {

    return (
        <div className='movie'>
            {items.map(item => (
                <Moviecard key={item.id} item={item}/>
            ))}
        </div>
    )


}

export default Mainbar;
