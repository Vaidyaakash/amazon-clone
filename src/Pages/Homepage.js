import React from 'react'
import Home from "../Images/Home1.jpg"
import Nav from './Nav'

const Homepage = () => {
    return (
        <>
            <Nav />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", margin: "45px" }}>
                <img src={Home} alt='img' width="50%" />
                <h1 style={{ fontSize: "65px" }}>Home Page</h1>
            </div>
        </>
    )
}

export default Homepage;