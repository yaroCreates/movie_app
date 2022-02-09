import React, { useEffect, useState } from 'react';
import './Sidebar.css'

function Sidebar({ trending, popular, top_rated, tv_show }) {

    useEffect(() => {
        var btns = document.querySelectorAll(".sidebar_link");
        btns.forEach(item => {
            item.addEventListener("click", () => {
                var selected = document.getElementsByClassName("active");
                selected[0].className = selected[0].className.replace(" active", "");
                item.className += " active";
            });
        });
    }, [])



    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <h1 className='sidebar_logo'>MovieApp</h1>
            </div>
            <div id="sidebar_ID" className='sidebar_links'>
                <a onClick={popular} className='sidebar_link active'>Popular Movies</a>
                <a onClick={trending} className='sidebar_link'>Trending</a>
                <a onClick={top_rated} className='sidebar_link'>Top Rated</a>
                <a onClick={tv_show} className='sidebar_link'>TV Shows</a>
            </div>
        </div>

    )
}

export default Sidebar;