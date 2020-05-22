//main server file for task manger project 
const express = require('express');
const bodyparser = require('body-parser');
//const cors = require(cors);

const routes = require('./routes/auth_routes');
const mongoose = require('mongoose');


const app = express();
//middleware for allowing cors(cross-origin-resource-sharing)
//app.use(cors());

//bodyparser for parsing json requests
app.use(bodyparser.json());

app.use(routes)

mongoose.connect('database keys',{ useNewUrlParser: true }).
then(result=>{
    console.log('Database connected')
    app.listen(8080,()=>{console.log(1)});//listening in port 8080.
})

