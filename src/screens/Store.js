import React from 'react'
import NavBar from '../components/Header/NavBar'
import SecondaryMenu from '../components/secondaryMenu/SecondayMenu'
import SingleSlider from '../components/singleSlider/SingleSlider'
import SubTitle from '../components/subTitle/SubTitle'
import StoreBanner from '../components/storeBanner/StoreBanner'
import SalesList from '../components/salesList/SalesList'
import Footer from '../components/footer/Footer'
import bookshelf from '../components/storeBanner/bookshelf.jpg'
import series from '../components/storeBanner/series.jpg'
import give from '../components/storeBanner/give.jpg'

function Store() {
    return (
        <div>
             <NavBar/>
            <SecondaryMenu/>
            <SingleSlider heading ={'Our store'} tagline = {'We offer a wide range of resources and gifts to help you.'} />
            <SubTitle 
             heading={'Featured Products'}
             subheading= {'Here is some of our newest and most popular resources. Check back regularly for new release'}
            
            />
           <StoreBanner  title = {'Books'} btn = {'view all books'}  image = {bookshelf}
           description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.'}/>
            <SalesList />
            <StoreBanner  title = {'Series'} btn = {'view all series'}  image = {series}
           description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.'}/>
            <SalesList />
            <StoreBanner  title = {'Give'} btn = {'view all gifts'}  image = {give}
           description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.'}/>
            <SalesList />
            <Footer/>

        </div>
    )
}

export default Store
