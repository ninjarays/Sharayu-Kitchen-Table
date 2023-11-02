import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const UserFeedBackPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Number:', number);
    console.log('Rating:', rating);
    navigate('/button');
  
  };


  return (
    <>
    <div className='userfeedback'>
    <div className='event-name'>Event Name</div>
    <div className='give-feedback'>
    Give Feedback
    </div>
    <form onSubmit={handleSubmit}>
    <div className='user-rating' >
          <Rating
            name="star-rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            size="large"
          />
        </div>
        <div>
          
          <TextField
            id="name"
            type="text"
            value={name}
            className='user-textfield'
            placeholder='Enter Name here'
            onChange={(e) => setName(e.target.value)}
          
          />
        </div>
        <div>
         
          <TextField
            id="number"
            type="text"
            placeholder='Enter Number here '
            value={number}
            className='user-textfield'
            onChange={(e) => setNumber(e.target.value)}
         
          />
        </div>

       
        <div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>

    </>
  )
}

export default UserFeedBackPage