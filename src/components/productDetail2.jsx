import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { product1s } from './product1';

const ProductDetail2 = () => {
  const navigate = useNavigate();
    const { id } = useParams(); // Get the product ID from the URL
  const product1 = product1s.find((s) => s.id === parseInt(id)); // Find the product by ID

  if (!product1) {
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
            <img src={product1.image} alt={product1.name} className='product-image-detail'/>
            <h1>{product1.name}</h1>
            <p style={{
                margin: '10px'
            }}>Rs. {product1.price}</p>
            <button className='buy-now'>Buy now</button>
        </div>
        </>
    );
};
export default ProductDetail2;