import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Forgot from '../components/forgotPassword/Forgot'
import Footer from '../components/footer/Footer'

function ForgotPassword() {
    return (
        <div>
            <NavBar/>
            <SecondaryMenu />
            <Forgot />
            <Footer />
        </div>
    )
}

export default ForgotPassword
