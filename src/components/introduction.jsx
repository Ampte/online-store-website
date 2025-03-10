import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Introduction = ({userName}) => {

    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate('/login');
    };
    return(
        <>
        <div className='introduction'>
           <div className='icons'>
           <div>
            <button className='comment'
            style={{
                padding: '10px'
            }}
            >
            <i class="fa-regular fa-comment"
            style={{
                fontSize: 'large'
            }}
            ></i>
            </button>
            </div>
            <div>{userName}
               <button className='user-circle' onClick={goToLoginPage}
               style={{
                padding: '10px'
               }}
               >
               <i class="fa-regular fa-circle-user"
               style={{
                fontSize: 'large'
               }}></i>
               </button>
            </div>
           </div>
        </div>
        </>
    );
};

export default Introduction;