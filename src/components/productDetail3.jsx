import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { product2s } from './product2';

const ProductDetail3 = () => {

  const navigate = useNavigate();

    const { id } = useParams(); // Get the product ID from the URL
  const product2 = product2s.find((a) => a.id === parseInt(id)); // Find the product by ID

  if (!product2) {
    return <h1>Product not found</h1>;
  }

  const goBack = () => {
    navigate('/');
  };
    return(
        <>
        <button onClick={goBack} style={{
          margin: '10px'
        }}><i class="fa-solid fa-backward" style={{
          fontSize: 'large'
        }}></i></button>
        <div className='product-detail'>
            <img src={product2.image} alt={product2.name} className='product-image-detail'/>
            <h1>{product2.name}</h1>
            <p style={{
                margin: '10px'
            }}>Rs. {product2.price}</p>
            <button className='buy-now'>Buy now</button>
        </div>
        </>
    );
};

export default ProductDetail3;