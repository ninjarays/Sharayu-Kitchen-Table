const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const port = 4000
const app = require('./app');

//Connecting MongoDB DataBase
mongoose.connect(process.env.DB_String)
    .then((message) => console.log("DB connected 🧬"))
    .catch((err) => console.log("DB not connected 🧬"))

//Starting Node.js Server
app.listen(port, () => {
  console.log(`Server of PORT: ${port}`)
})
