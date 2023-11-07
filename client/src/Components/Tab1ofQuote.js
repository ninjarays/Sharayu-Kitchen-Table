import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FoodDropdown from './FoodDropdown';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Tab1ofQuote = ({ onGetQuote }) => {
  const [number, setNumber] = useState('');
  const [selectedSoups, setSelectedSoups] = useState([]);
  const [selectedAppetizers, setSelectedAppetizers] = useState([]);
  const [selectedMainCourseVeg, setSelectedMainCourseVeg] = useState([]);

  const soupOptions = ['Tomato Soup', 'Chicken Noodle Soup', 'Minestrone Soup', 'Clam Chowder'];
  const appetizersOptions = ['Mozzarella Sticks', 'Spinach Dip', 'Chicken Wings', 'Spring Rolls'];
  const mainCourseVegOptions = ['Vegetable Curry', 'Paneer Tikka', 'Vegetable Biryani', 'Aloo Gobi'];

  const handleGetQuoteClick = () => {
    onGetQuote();
  };

  return (
    <Container>
      <div className=" no-of-guest">
      <TextField
        id="number"
        type="text"
        placeholder="Enter Number of guests"
        value={number}
        fullWidth
        onChange={(e) => setNumber(e.target.value)}
      />
      </div>
      <FoodDropdown
        label="Soup"
        options={soupOptions}
        selectedOptions={selectedSoups}
        onOptionSelect={(option) => setSelectedSoups([...selectedSoups, option])}
      />
      <FoodDropdown
        label="Appetizers"
        options={appetizersOptions}
        selectedOptions={selectedAppetizers}
        onOptionSelect={(option) => setSelectedAppetizers([...selectedAppetizers, option])}
      />
      <FoodDropdown
        label="Main Course (Veg)"
        options={mainCourseVegOptions}
        selectedOptions={selectedMainCourseVeg}
        onOptionSelect={(option) => setSelectedMainCourseVeg([...selectedMainCourseVeg, option])}
      />
     <div className="get-quote-button-div "> 
     <Button
      className='get-quote-button'
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleGetQuoteClick}
      >
        Get Quote
      </Button>
     </div>
    </Container>
  );
};

export default Tab1ofQuote;
