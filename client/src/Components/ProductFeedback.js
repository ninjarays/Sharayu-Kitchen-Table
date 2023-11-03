import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

const ProductFeedback = ({ productid, name, imgSrc, onProductFeedback }) => {
  const [value, setValue] = React.useState(2);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
  
    onProductFeedback( productid, name,newValue, feedback );

  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  
    onProductFeedback(productid, name ,value, e.target.value);
  };


    return (
    <div className='product-fee'> <img src={imgSrc} alt='dish' className='product-fee-img' />
    <div className='product-fee-details'>
      <div className='dishName'>
        {name}
      </div>
      <div>
      <Rating
    name="simple-controlled"
    value={value}
     onChange={handleRatingChange}
  />
      </div>
      <div >
      <TextField
            
            type="text"
            value={feedback}
            className='feedback-textfield'
            placeholder='Write here'
            onChange={handleFeedbackChange}
          
          />
      </div>

    </div>
    </div>
  )
}

export default ProductFeedback