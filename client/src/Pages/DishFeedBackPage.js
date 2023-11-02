import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ProductFeedback from '../Components/ProductFeedback';


const DishFeedBackPage = () => {
      const navigate = useNavigate();
      const [productFeedback, setProductFeedback] = useState([]);
      const products = [
        {
          name: 'Product 1',
          imgSrc:'/dish.png',
        },
        {
          name: 'Product 2',
          imgSrc: '/dish.png',
        },
        {
          name: 'Product 3',
          imgSrc:'/dish.png',
        },
        {
          name: 'Product 4',
          imgSrc: '/dish.png',
        },
        {
          name: 'Product 5',
          imgSrc:'/dish.png',
        },
        {
          name: 'Product 6',
          imgSrc: '/dish.png',
        },
        {
          name: 'Product 7',
          imgSrc:'/dish.png',
        },
        {
          name: 'Product 8',
          imgSrc: '/dish.png',
        },
      ];
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit button clicked.');
        console.log('Product Feedback Data:', productFeedback);

        navigate('/thankyou');
      };


const handleProductFeedback = (name, rating, feedback) => {
  // Add feedback for the current product to the array
  setProductFeedback((prevFeedback) => [
    ...prevFeedback,
    { name, rating, feedback },
  ]);
};


      const handleSubmit1 = () => {
    
        navigate('/menu');
      
      };

     
    
  return (
    <div>
      <div className='skipButton'>
      <Button type="submit" variant="contained" color="primary" onClick={handleSubmit1}>
            Skip
          </Button>
      </div>
         <form onSubmit={handleSubmit}>
          <div className='productFeedback'>
          {products.map((product, index) => (
            <ProductFeedback key={index} name={product.name} imgSrc={product.imgSrc}  onProductFeedback={handleProductFeedback} />
          ))}

          </div>
         <div className='dish-feedback-submit'>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
         </form>
    </div>
  )
}

export default DishFeedBackPage