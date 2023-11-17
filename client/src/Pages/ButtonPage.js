import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';

const ButtonPage = () => {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const handleSubmit1 = (e) => {
        e.preventDefault();
        navigate(`/dishFeedback/${eventId}`);
      
      };
      const handleSubmit2 = (e) => {
        e.preventDefault();
        navigate('/');
      
      };
  return (
    <>
    <div className='button-two'>
    <div className='continue-feedback'>
          <Button type="submit" className='continue-feedback-button' variant="contained" onClick={handleSubmit1} >
          Continue feedback
          </Button>
        </div>
        <div className='Skip-to-Menu'>
          <Button type="submit" variant="contained" className="Skip-to-Menu-button"onClick={handleSubmit2}>
          Skip to Menu
          </Button>
        </div>
    </div>
    </>
  )
}

export default ButtonPage