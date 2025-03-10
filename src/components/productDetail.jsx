import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { products } from './product';

const ProductDetail = () => {

  const navigate = useNavigate();
    const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by ID

  if (!product) {
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
            <img src={product.image} alt={product.name} className='product-image-detail'/>
            <h1>{product.name}</h1>
            <p style={{
              margin: '10px'
            }}>Rs. {product.price}</p>
            <button className='buy-now'>Buy now</button>
        </div>
        </>
    );
};
export default ProductDetail;