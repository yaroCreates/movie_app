import React, { useEffect, useState } from 'react';
import './Sidebar.css'
// import WhatshotIcon from '@material-ui/icons/Whatshot';
// import LocalMoviesIcon from '@material-ui/icons/LocalMovies';


import { LocalMoviesOutlined, RateReviewOutlined, WhatshotOutlined, LiveTvOutlined } from '@material-ui/icons'

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
                <h1 onClick={popular} className='sidebar_logo'>MovieApp</h1>
            </div>
            <div id="sidebar_ID" className='sidebar_links'>
                <a onClick={popular} className='sidebar_link active'>
                    < LocalMoviesOutlined className='sidebar_icon' fontSize='small' />
                    <h3>Popular Movies</h3>
                </a>
                <a onClick={trending} className='sidebar_link'>
                    < WhatshotOutlined className='sidebar_icon' fontSize='small' />
                    <h3>Trending</h3>
                </a>
                <a onClick={top_rated} className='sidebar_link'>
                    < RateReviewOutlined className='sidebar_icon' fontSize='small' />
                    <h3>Top Rated</h3>
                </a>
                <a onClick={tv_show} className='sidebar_link'>
                    < LiveTvOutlined className='sidebar_icon' fontSize='small' />
                    <h3>TV Shows</h3>
                </a>
            </div>
        </div>

    )
}

export default Sidebar;