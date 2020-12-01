import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import Login from '../components/login/Login'
import Footer from '../components/footer/Footer'

function SignIn() {
    return (
        <div>
            <NavBar/>
            <SecondaryMenu />
            <Login />
            <Footer />
        </div>
    )
}

export default SignIn
