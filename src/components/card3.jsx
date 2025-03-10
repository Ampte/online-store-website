import React from 'react'
import { Link } from 'react-router-dom';
import { product2s } from './product2';

const Card3 = () => {
    return(
        <>
        <div className='product-card'>
            {product2s.map((product2) => (
                <Link to={`/productDetail3/${product2.id}`} key={product2.id}
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                >
                    <div className='card'>
                        <img src={product2.image} alt={product2.name} className='product-image'/>
                        <h2>{product2.name}</h2>
                        <p style={{
                            margin: '10px'
                        }}>Rs. {product2.price}</p>
                    </div>
                </Link>
            ))}
        </div>
        </>
    );
};

export default Card3;