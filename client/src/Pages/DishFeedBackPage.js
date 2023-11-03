import React, { useState,useEffect  } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ProductFeedback from '../Components/ProductFeedback';
import dish from '../img/dish.png';


const DishFeedBackPage = () => {
      const navigate = useNavigate();
      const [productFeedback, setProductFeedback] = useState([]);
      const [productsData, setProductsData] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:4000/api/event/6543ce9bd80c7c393cc1924d');
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
          {productsData.map((product, index) => (
            <ProductFeedback key={index} name={product.product_id} imgSrc={dish}  onProductFeedback={handleProductFeedback} />
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