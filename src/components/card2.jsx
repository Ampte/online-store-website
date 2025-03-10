import React from 'react'
import { product1s } from './product1';
import { Link } from 'react-router-dom';

const Card2 = () => {
    return(
        <>
        <div className='product-card'>
            {product1s.map((product1) => (
                <Link to={`/productDetail2/${product1.id}`} key={product1.id}
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                >
                    <div className='card'>
                        <img src={product1.image} alt={product1.name} className='product-image'/>
                        <h2>{product1.name}</h2>
                        <p style={{
                            margin: '10px'
                        }}>Rs. {product1.price}</p>
                    </div>
                </Link>
            ))}
        </div>
        </>
    );
};


export default Card2;