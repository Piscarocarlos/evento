import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

function FrontLayout({ children }: any) {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    )
}

export default FrontLayout
