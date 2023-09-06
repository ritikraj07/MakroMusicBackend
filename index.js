require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDatabase = require('./DB');

const app = express();


app.use(express.json());
// app.use(express.static('static'));
app.use(cors());
app.use(morgan('tiny'))




app.get('/', (req, res) => {
    
})


connectDatabase()
    .then(() => {
    app.listen(()=>console.log('Server Started'))
    })
.catch((error)=>console.log(error))