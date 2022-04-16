import React, { useEffect, useState } from 'react';
import './Sidebar.css'
// import WhatshotIcon from '@material-ui/icons/Whatshot';
// import LocalMoviesIcon from '@material-ui/icons/LocalMovies';


import { LocalMoviesOutlined, RateReviewOutlined, WhatshotOutlined, LiveTvOutlined, MenuOutlined, CloseOutlined } from '@material-ui/icons'

function Sidebar({ trending, popular, top_rated, tv_show }) {

    useEffect(() => {
        var btns = document.querySelectorAll(".sidebar_link");

        btns.forEach(item => {
            item.addEventListener("click", () => {
                var selected = document.getElementsByClassName("active");
                selected[0].className = selected[0].className.replace(" active", "");
                item.className += " active";
            });
        })

    }, [])

    // useEffect(() => {
    //     document.onclick = (e) => {
    //         let xyz = document.querySelector('.sidebar')
    //         if (xyz.style.display === 'block' && e.target.id !== 'sidebar') {
    //             xyz.style.display = 'none'
    //         }
    //     }
    // }, [])

    const reset = () => {
        let xyz = document.querySelector('.sidebar')
        console.log(xyz)
        xyz.style.display = ''
    }

    const hideMenu = () => {
        let xyz = document.querySelector('.sidebar')
        console.log(xyz)
        xyz.style.display = 'none'
        reset()
    }

    




    return (
        <div id='sidebar' className='sidebar'>
            <div className='sidebar_header'>
                <h3 className='sidebar_logo'>MovieApp</h3>
                < CloseOutlined className='sidebar_close' onClick={hideMenu} />
            </div>
            <div id="sidebar_ID" className='sidebar_links'>
                <a onClick= {popular} className='sidebar_link active'>
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