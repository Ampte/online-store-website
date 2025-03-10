import React from 'react'
import { products } from './product';
import { Link } from 'react-router-dom';

const Card = () => {
    return(
        <>
        <div className='product-card'>
            {products.map((product) => (
                <Link to={`/productDetail/${product.id}`} key={product.id}
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                 >
                    <div className='card'>
                        <img src={product.image} alt={product.name} className='product-image'/>
                        <h2>{product.name}</h2>
                        <p style={{
                            margin: '10px'
                        }}>Rs. {product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
        </>
    );
};

export default Card;