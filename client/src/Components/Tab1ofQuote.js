import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FoodDropdown from './FoodDropdown';
import Container from '@mui/material/Container';
import axios from '../config/axios';

const Tab1ofQuote = ({ onGetQuote }) => {
  const [guestnumber, setGuestnumber] = useState();
  const [selectedCategories, setSelectedCategories] = useState({});
  const [categoryData, setCategoryData] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/category')
      .then((response) => {
        const data = response.data;
        if (data.status === 'success') {
          // Assuming the API response is an array of categories
          setCategoryData(data.data.category);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

const handleCategoryOptionSelect = (category, option) => {
    const isOptionSelected = selectedCategories[category] && selectedCategories[category].includes(option);
  
    if (isOptionSelected) {
      
      setSelectedProducts((prevSelectedProducts) => prevSelectedProducts.filter((product) => product.product_name !== option));
      setSelectedCategories((prevSelectedCategories) => ({
        ...prevSelectedCategories,
        [category]: prevSelectedCategories[category].filter((selectedOption) => selectedOption !== option),
      }));
    } else {
   
      const selectedProduct = categoryData
        .find((cat) => cat.category_id === category)
        .products.find((product) => product.product_name === option);
  
      const newSelectedProduct = {
        product_id: selectedProduct.product_id,
        product_name: selectedProduct.product_name,
      };
  
      setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, newSelectedProduct]);
      console.log('Selected Products:', selectedProducts);
      setSelectedCategories((prevSelectedCategories) => ({
        ...prevSelectedCategories,
        [category]: [...(prevSelectedCategories[category] || []), option],
      }));
      console.log('Selected Categories:', selectedCategories);
    }
  };

  const handleGetQuoteClick = () => {
    onGetQuote(selectedProducts, guestnumber);
  };

  return (
    <Container>
      <div className="no-of-guest">
        <TextField
          id="guestnumber"
          type="number"
          placeholder="Enter Number of guests"
          value={guestnumber}
          fullWidth
          onChange={(e) => setGuestnumber(e.target.value)}
        />
      </div>
      {categoryData.map((category) => (
        <FoodDropdown
          key={category.category_id}
          label={category.category_id}
          options={category.products.map((product) => product.product_name)}
          selectedOptions={selectedCategories[category.category_id] || []}
          onOptionSelect={(option) => handleCategoryOptionSelect(category.category_id, option)}
        />
      ))}
      <div className="get-quote-button-div">
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
