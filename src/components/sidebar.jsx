import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
   
    return(
        <>
        <div className='sidebar'><h1>Kaderik</h1>
            <div className='product-list'>
            <div className="list"><Link to='/footwear'><h3>Footwears </h3></Link></div>
            <div className="list"><h3>Pants</h3></div>
            <div className="list"><Link to='/shirt'><h3>Shirts</h3></Link></div>
            </div>
            <div className='setings-list'>
            <div className='setings'><Link to='/'><p>Home</p></Link></div>
            <div className="setings"><Link to='/about'><p>About</p></Link></div>
            <div className="setings"><Link to='/contact'><p>Contact</p></Link></div>
            </div>
        </div>
        </>
    );
};

export default Sidebar;