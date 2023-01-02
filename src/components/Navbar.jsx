import React, { useState, createContext, useContext } from 'react'
import "../styles/navbar.css"


const Navbar = () => {
    const [formType, setFormType] = useState('basketball')
    return (
        <nav className='nav'>
            <h1>Basketball</h1>
            <h1>Swimming</h1>
            <h1>Complaint</h1>
        </nav>
    )
}

export default Navbar