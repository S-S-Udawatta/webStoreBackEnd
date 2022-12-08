const express = require('express')

const bodyParser = require('body-parser');
const mongoose= require('mongoose');
require('dotenv').config();
const port=process.env.SERVER_PORT;

const customerRoute = require('./route/CustomerRoute')
const adminRoute = require('./route/ProductRoute')
const orderRoute = require('./route/OrderRoute')

const app= express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200'
}));

mongoose.connect('mongodb://localhost:27017/store').then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on ${port}`)
    });
}).catch(err=>{
    console.log(err);
})



// app.post('/',(req ,resp)=>{
//     console.log(req.body);
//     resp.end('sucsess')
// });


app.use('/api/v1/customer/',customerRoute)
app.use('/api/v1/admin/',adminRoute)
app.use('/api/v1/order/',orderRoute)
