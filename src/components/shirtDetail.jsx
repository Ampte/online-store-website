import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { shirts } from './shirt_data';

const ShirtDetail = () => {
    
      const navigate = useNavigate();
    
      const { id } = useParams(); 
      const shirt = shirts.find((c) => c.id === parseInt(id)); 
    
      if (!shirt) {
        return <h1>Product not found</h1>
      };
    
      const goBack = () => {
        navigate('/shirt');
      };
    return(
        <>
         <button onClick={goBack} style={{
          margin: '10px'
        }}><i class="fa-solid fa-backward" style={{
          fontSize: 'large'
        }}></i></button>
        <div className='product-detail'>
            <img src={shirt.image} alt={shirt.name} className='product-image-detail'/>
            <h1>{shirt.name}</h1>
            <p style={{
                margin: '10px'
            }}>Rs. {shirt.price}</p>
            <button className='buy-now'>Buy now</button>
        </div>
        </>
    );
};

export default ShirtDetail;