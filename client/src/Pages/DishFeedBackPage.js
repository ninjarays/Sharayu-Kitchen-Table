import React, { useState,useEffect  } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ProductFeedback from '../Components/ProductFeedback';
import dish from '../img/dish.png';
import { useCustomer } from '../Components/CustomerContext';
import {useEvent} from '../Components/EventContext';


const DishFeedBackPage = () => {
      const navigate = useNavigate();
      const { customerId } = useCustomer();
      const { eventId } = useEvent();
      const [productFeedback, setProductFeedback] = useState([]);
      const [productsData, setProductsData] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/api/event/${eventId}`);
            const data = await response.json();
    
            if (data.status === 'success') {
              setProductsData(data.data.event.products);
            } else {
              console.error('Failed to fetch products data');
            }
          } catch (error) {
            console.error('Error fetching products data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submit button clicked.');
        console.log('Product Feedback Data:', productFeedback);
      
        try {
          const response = await fetch(`http://localhost:4000/api/customer/${customerId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(productFeedback),
          });
      
          if (response.ok) {
            console.log('Feedback submitted successfully');
            navigate('/thankyou');
          } else {
            console.error('Failed to submit feedback');
          }
        } catch (error) {
          console.error('Error submitting feedback:', error);
        }
      };
     

const handleProductFeedback = (productid, name, rating, feedback) => {
  const existingFeedbackIndex = productFeedback.findIndex((item) => item.product_id === productid);

  if (existingFeedbackIndex !== -1) {
    // If feedback for the same product already exists, update it
    const updatedFeedback = [...productFeedback];
    updatedFeedback[existingFeedbackIndex] = {
      ...updatedFeedback[existingFeedbackIndex],
      product_name: name,
      product_rating: rating,
      product_feedback: feedback,
    };
    setProductFeedback(updatedFeedback);
  } else {
    setProductFeedback((prevFeedback) => [
      ...prevFeedback,
      {
        product_id: productid,
        product_name: name,
        product_rating: rating,
        product_feedback: feedback,
      },
    ]);
  }
};
      const handleSubmit1 = () => {
    
        navigate('/menu');
      
      };

    
  return (
    <div>
      <div className='skipButton'>
      <Button type="submit" className='skip-button' variant="contained" color="primary" onClick={handleSubmit1}>
            Skip
          </Button>
      </div>
         <form onSubmit={handleSubmit}>
          <div className='productFeedback'>
          {productsData.map((product, index) => (
            <ProductFeedback key={index} name={product.product_name} productid={product.product_id} imgSrc={dish}  onProductFeedback={handleProductFeedback} />
          ))}

          </div>
         <div className='dish-feedback-submit'>
          <Button type="submit" className='dish-feedback-submit-button' variant="contained"  color="primary">
            Submit
          </Button>
        </div>
         </form>
    </div>
  )
}

export default DishFeedBackPage