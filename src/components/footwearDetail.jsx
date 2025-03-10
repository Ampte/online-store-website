import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { footwears } from './footwear_data';

const FootwearDetail = () => {
    
      const navigate = useNavigate();
    
        const { id } = useParams(); // Get the product ID from the URL
      const footwear = footwears.find((f) => f.id === parseInt(id)); // Find the product by ID
    
      if (!footwear) {
        return <h1>Product not found</h1>;
      }
    
      const goBack = () => {
        navigate('/footwear');
      };
    return(
        <>
         <button onClick={goBack} style={{
          margin: '10px'
        }}><i class="fa-solid fa-backward" style={{
          fontSize: 'large'
        }}></i></button>
        <div className='product-detail'>
            <img src={footwear.image} alt={footwear.name} className='product-image-detail'/>
            <h1>{footwear.name}</h1>
            <p style={{
                margin: '10px'
            }}>Rs. {footwear.price}</p>
            <button className='buy-now'>Buy now</button>
        </div>
        </>
    );
};

export default FootwearDetail;