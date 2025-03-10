 import React from 'react'
 import { shirts } from './shirt_data';
 import { Link } from 'react-router-dom'
 
 
 
 const Shirt = () => {
     return(
         <>
         <h1 style={{margin: '10px'}}>Footwears</h1>
         <div className='footwear-shirt-pant'>
             {shirts.map((shirt) => (
                 <Link to={`/shirtDetail/${shirt.id}`} key={shirt.id}
                 style={{
                     textDecoration: 'none',
                     color: 'black'
                 }}
                 >
                     <div className='footwear-shirt-pant-card'>
                         <img src={shirt.image} alt={shirt.name} className='footwear-image'/>
                         <div>
                         <h2>{shirt.name}</h2>
                         <p style={{
                             margin: '10px'
                         }}>Rs. {shirt.price}</p>
                         </div>
                     </div>
                 </Link>
             ))}
         </div>
         </>
     );
 };
 
 export default Shirt;
 
 