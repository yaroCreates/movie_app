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
                <div className='sidebar_class'>
                    <a onClick={popular} className='sidebar_link active'>Popular Movies</a>
                    < LocalMoviesOutlined fontSize='small'/>
                </div>
                <div className='sidebar_class'>
                    <a onClick={trending} className='sidebar_link'>Trending</a>
                    <  WhatshotOutlined fontSize='small'/>
                </div>
                <div className='sidebar_class'>
                    <a onClick={top_rated} className='sidebar_link'>Top Rated</a>
                    < RateReviewOutlined fontSize='small'/>
                </div>
                <div className='sidebar_class'>
                    <a onClick={tv_show} className='sidebar_link'>TV Shows</a>
                    < LiveTvOutlined fontSize='small'/>
                </div>
            </div>
        </div>

    )
}

export default Sidebar;