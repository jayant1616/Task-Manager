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

mongoose.connect('mongodb+srv://jayant16:J1%23jayant16@cluster0-iko3n.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true }).
then(result=>{
    console.log('Database connected')
    app.listen(8080,()=>{console.log(1)});//listening in port 8080.
})

