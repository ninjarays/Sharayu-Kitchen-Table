import * as React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab1ofQuote from '../Components/Tab1ofQuote';
import Tab2ofQuote from '../img/Tab2ofQuote';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const GetQuotePage = () => {
  const [value, setValue] = React.useState(0);
  const [selectedProducts, setSelectedProducts] = React.useState([]);
  const [guestnumber, setGuestnumber] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleGetQuote = (selectedProducts, guestnumber) => {

    setValue(1);

    setSelectedProducts(selectedProducts);
    setGuestnumber(guestnumber);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
         
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <Tab1ofQuote onGetQuote={handleGetQuote}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Tab2ofQuote selectedProducts={selectedProducts}  guestnumber={guestnumber} />
      </CustomTabPanel>
    </Box>
  );
}

export default GetQuotePage;
