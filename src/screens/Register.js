import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SignUp from '../components/createAccount/SignUp'
import Footer from '../components/footer/Footer'

function Register() {
    return (
        <div>
            <NavBar/>
            <SecondaryMenu />
            <SignUp />
            <Footer />
        </div>
    )
}

export default Register
