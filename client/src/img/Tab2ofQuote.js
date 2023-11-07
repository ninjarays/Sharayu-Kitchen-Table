import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Tab2ofQuote = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit2 = () => {
        navigate('/thankyouQuote');
      
      };
  return (
    <div className='tab2-quote'>
        <div className='quote-text'>
        Unlock Quote!! 
        <div>Enter Name & Contact Information to get Quote</div>
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
            placeholder='Enter Phone Number  '
            value={number}
            className='user-textfield'
            onChange={(e) => setNumber(e.target.value)}
         
          />
        </div>
        <div>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit2}>
            Continue
          </Button>
        </div>
    </div>
  )
}

export default Tab2ofQuote