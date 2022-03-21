import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Posts from './Posts'
import { Link } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
function LandingPage() {
    return (
        <>
            <Nav />
            <Main />
            <Posts />
            <Footer />
        </>
    )
}

export default LandingPage
