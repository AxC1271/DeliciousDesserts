import React, { useState } from 'react'

import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'
import Recipes from './Components/Recipes/Recipes'

const App = () => {
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
                <Recipes />
            </React.Fragment>
        )
    }
}

export default App
