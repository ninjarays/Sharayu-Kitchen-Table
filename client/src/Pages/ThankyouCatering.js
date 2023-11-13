import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const ThankyouCatering = () => {
    const navigate = useNavigate();
    const handleSubmit2 = () => {
        navigate('/');
      
      };
  return (
    <div >
        <div className='thankyouQuote'>
        <div className='tyQuote'>
        Thank you for submitting your requirement and some one from our team will get back to you in 24 hours
        </div>
        <div className='Skip-to-Menu' >
          <Button type="submit" variant="contained" className='tab2-button' onClick={handleSubmit2}>
          Go to Menu
          </Button>
        </div>
        </div>
    </div>
  )
}

export default ThankyouCatering