import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import axios from '../config/axios';

const Tab2ofQuote = ({ selectedProducts , guestnumber  }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState();
    const navigate = useNavigate();
    console.log('guestnumber', guestnumber);

    const handleSubmit2 = () => {
      const data = {
        customer_name: name,
        customer_phone: parseInt(number, 10),
        customer_guest_number:parseInt(guestnumber, 10),
        products: selectedProducts, 
      };
    console.log('data',data);
      axios.post('/api/quotes', data)
        .then((response) => {
          navigate('/thankyouQuote');
        })
        .catch((error) => {
          console.error('Error sending POST request:', error);
        });
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
            type="number"
            placeholder='Enter Phone Number  '
            value={number}
            className='user-textfield'
            onChange={(e) => setNumber(e.target.value)}
         
          />
        </div>
        <div>
        <Button type="submit" variant="contained" color="primary" className='tab2-button' onClick={handleSubmit2}>
            Continue
          </Button>
        </div>
    </div>
  )
}

export default Tab2ofQuote