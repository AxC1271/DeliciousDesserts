import React from 'react'

import './Navbar.css'

const Navbar = ({ setPage }) => {
    return (
        <div className="nav-bar">
            <h1 className="name">Delightful Desserts</h1>
            <h2 className="options" onClick={() => setPage("Recipes")}>Recipe Blog</h2>
            <h2 className="options" onClick={() => setPage("Home")}>Home</h2>
        </div>
    )
}

export default Navbar