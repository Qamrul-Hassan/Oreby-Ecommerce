import React from 'react'
import Header from "./Header"
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import Footer from "./Footer"
import { ScrollRestoration } from "react-router-dom";


const RootLayOut = () => {
    return (
        <>
            <ScrollRestoration/>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default RootLayOut