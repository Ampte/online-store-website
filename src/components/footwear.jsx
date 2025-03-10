import React from 'react'
import { footwears } from './footwear_data'
import { Link } from 'react-router-dom'



const Footwear = () => {
    return(
        <>
        <h1 style={{margin: '10px'}}>Footwears</h1>
        <div className='footwear-shirt-pant'>
            {footwears.map((footwear) => (
                <Link to={`/footwearDetail/${footwear.id}`} key={footwear.id}
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                >
                    <div className='footwear-shirt-pant-card'>
                        <img src={footwear.image} alt={footwear.name} className='footwear-image'/>
                        <div>
                        <h2>{footwear.name}</h2>
                        <p style={{
                            margin: '10px'
                        }}>Rs. {footwear.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        </>
    );
};

export default Footwear;

