import React, { useEffect, useState } from 'react';
import './Mainbar.css'
import Moviecard from './Moviecard';
import { MenuOutlined } from '@material-ui/icons'

function Mainbar({ items, handleChange, handleSubmit, searchValue }) {

    useEffect(() => {
        const input = document.getElementById('my_input')
        input.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                e.preventDefault()
                document.getElementById('my_btn').click()
            }
        })
    }, [])

    return (
        <div className='mainbar'>
            
            <div className='movie'>
                {items.map(item => (
                    <Moviecard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )


}

export default Mainbar;
