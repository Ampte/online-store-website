import React from 'react'
import Header from './header';
import Sidebar from './sidebar';
import Introduction from './introduction';
import Card from './card';
import Card2 from './card2';
import Card3 from './card3';
import Footer from './footer';

const Home = ({userName}) => {
    return(
        <>
        <div className='home'>
            <div className='home-header'>
            <Header/>
            </div>
            <div className='home-sidebar'>
            <Sidebar/>
            </div>
            <div className='home-introduction'>
                <Introduction userName={userName}/>
            </div>
            <div className='home-card'>
           <div className='card-1'>
           <Card/>
           </div>
           <div className='card-2'>
            <Card2/>
           </div>
           <div className='card-3'>
           <Card3/>
           </div>
            </div>
            <div className='home-footer'>
                <Footer/>
            </div>
        </div>
        </>
    );
};

export default Home;