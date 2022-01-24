import React from 'react';
import './Sidebar.css'

function Sidebar() {

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <h1 className='sidebar_logo'>MovieApp</h1>
            </div>
            <div className='sidebar_links'>
                <a href='#' className='sidebar_link active'>All Movies</a>
                <a href='#' className='sidebar_link'>TV Series</a>
                <a href='#' className='sidebar_link'>Favourites</a>
                <a href='#' className='sidebar_link'>Watch Later</a>
            </div>
        </div>

    )
}

export default Sidebar;