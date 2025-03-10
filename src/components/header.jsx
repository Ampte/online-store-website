import React from 'react'
import './component.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const goToSettings = () => {
        navigate('/sidebar');
    };
    return(
        <>
       <div className='header'>
       <div className='logo'>
            <h1>Kaderik</h1>
        </div>
        <div className='menu-bar'>
            <button className='bar' onClick={goToSettings}
            >
            <i class="fa-solid fa-bars-staggered"
            style={{
                fontSize: 'large'
            }}
            ></i>
            </button>
        </div>
       </div>
        </>
    );
};

export default Header;