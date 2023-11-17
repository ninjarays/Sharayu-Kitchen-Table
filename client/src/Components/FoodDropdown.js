import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function FoodDropdown({ label, options, selectedOptions, onOptionSelect }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleButtonClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleMenuItemClick = (event, option) => {
    onOptionSelect(option);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const dropdownStyle = {
    marginBottom: open ? `${options.length * 55}px` : '0',
  };
  return (
    <div className={`food-dropdown ${open ? 'open' : ''}`} style={dropdownStyle} >
      <Button
        onClick={handleButtonClick}
        className='food-dropdown-button'
        variant="outlined"
        endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      >
        {label}
      </Button>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
        <Paper style={{ zIndex: 1,    boxShadow: "none" }}>
          {options.map((option) => (
            <MenuItem key={option} onClick={(event) => handleMenuItemClick(event, option)}>
              <Checkbox checked={selectedOptions.includes(option)} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Paper>
      </Popper>
    </div>
  );
}

export default FoodDropdown;
