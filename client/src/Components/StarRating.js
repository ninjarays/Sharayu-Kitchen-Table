import React ,{useState}from 'react'
import Rating from '@mui/material/Rating';

const StarRating = () => {
    const [value, setValue] = React.useState(2);
  return (
    <div>
        <Rating
    name="simple-controlled"
    size="large"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
      
    }}
  />
  </div>
  )
}

export default StarRating