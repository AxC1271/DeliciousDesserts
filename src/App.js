import React, { useState } from 'react'

import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'
import Recipes from './Components/Recipes/Recipes'

const App = () => {
    const scrollToPercentage = (percentage) => {
        const scrollPosition = document.documentElement.scrollHeight * (percentage / 100)
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        })
      }

    const [page, setPage] = useState("Home")

    if (page === "Home") {
        return (
            <React.Fragment>
                <Navbar setPage = {setPage} />
                <HomePage />
            </React.Fragment>
        )
    }
    else if (page === "Recipes") {
        return (
            <React.Fragment>
                <Navbar setPage = {setPage} />
                <Recipes scrollToPercentage = {scrollToPercentage} />
            </React.Fragment>
        )
    }
}

export default App
