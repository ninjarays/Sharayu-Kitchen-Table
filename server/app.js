const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
app.use(cors());

// Importing Routes
const eventsRoute = require('./routers/eventsRoute')
const productRoute = require('./routers/productRoute')
const customerRoute = require('./routers/customerRoute')
const morgan = require('morgan')
app.use(morgan('dev'))

// To access Body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Routes and Controllers
app.use('/api/event', eventsRoute);
app.use('/api/product', productRoute);
app.use('/api/customer', customerRoute);

//Testing Route
app.get('/', (req, res) => {
    res.send('Hello World!')
})


module.exports = app;
  
