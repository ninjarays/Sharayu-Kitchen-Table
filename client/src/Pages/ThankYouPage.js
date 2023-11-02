import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const handleSubmit1 = () => {
   

    navigate('/coupon');
  
  };
  const handleSubmit2 = () => {
   

    navigate('/menu');
  
  };
  return (
    <div>
       <div className='text-ty'>
       <div className='ty'>
        Thank you for submitting your feedback!
        </div>
        <div className='coupon'>
        Now you get Rs 50 off your next order. Save your coupon AHDUYD786
        </div>
        <div className='coupon-button'>
          <Button type="submit" variant="contained"  onClick={handleSubmit1}>
          USE COUPON
          </Button>
        </div>
        <div className='Skip-to-Menu' >
          <Button type="submit" variant="contained" onClick={handleSubmit2}>
          Go to Menu
          </Button>
        </div>
       </div>
    </div>
  )
}

export default ThankYouPage