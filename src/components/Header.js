import React, { useState, useEffect } from 'react'
import './Header.css'
import { MenuOutlined, CloseOutlined }

    from '@material-ui/icons'

import SearchIcon from '@material-ui/icons/Search';

function Header({ popular, handleChange, handleSubmit, searchValue }) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const input = document.getElementById('my_input')
        input.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                e.preventDefault()
                document.getElementById('my_btn').click()
            }
        })
    }, [])

    const showMenu = () => {
        let xyz = document.querySelector('.sidebar')
        console.log(xyz)
        xyz.style.display = 'block'
    }

    return (
        <div className='header'>
            <div className='header_logo'>
                <h1 onClick={popular} className='logo'>MovieApp</h1>
                <MenuOutlined className='menu' onClick={showMenu} />
                {/* <CloseOutlined className='close' /> */}

            </div>
            <div className='header_search'>
                <SearchIcon className='search_icon' />
                <input
                    id='my_input'
                    className='search_input'
                    placeholder='Search movies'
                    value={searchValue}
                    onChange={handleChange}
                />
                <button
                    id='my_btn'
                    className='search_btn'
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default Header