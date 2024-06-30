import React from 'react'

import './HomePage.css'


const HomePage = () => {
    return (
        <div className="intro-container">
            <h1 className="title">Who Are We?</h1>
            <div className="underline"></div>
            <img src="logo.png" alt="" className="logo" />
            <p className="descriptor">
                Welcome to our site! 
            </p>
            <br />
            <p className="descriptor">
                We simply want a website where we can have
                a collection of yummy, taste-certified, easy,
                and inspirational recipes for the average home
                cook to dabble in! Feel free to explore this page
                to explore different recipes you've never seen before!
                This is a food blog site, where people can share their
                recipes.
            </p>
        </div>
    )
}

export default HomePage