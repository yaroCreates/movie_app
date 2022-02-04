import React, { useState } from 'react';
import './Mainbar.css'
import Moviecard from './Moviecard';
import SearchIcon from '@material-ui/icons/Search';

function Mainbar({ items, handleChange, handleSubmit, searchValue }) {

    return (
        <div className='mainbar'>
            <div className='mainbar_header'>
                <div className='mainbar_search'>
                    <SearchIcon className='mainbar_search_icon' />
                    <input
                        className='mainbar_search_input'
                        placeholder='Search movies'
                        value={searchValue}
                        onChange={handleChange}
                    />
                    <button
                        className='mainbar_search_btn'
                        onClick={handleSubmit}
                    >
                        Search
                    </button>
                </div>
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
