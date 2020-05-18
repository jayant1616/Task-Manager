//its a function to check whether the User exist in Database
const mongoose = require('mongoose');

const User = require('../models/users');

    

 function check(name,email)
{
    //basically returns the promise 
   return User.findOne({username:email,email:email})
    

}


//check('test_1','test@test.com').then(result=>console.log(result,'done!!'))

 function create(username,name,email)
{
    //returns the promise;
     return User.create({
        username:username,
        name:name,
        email:email,
    })
    
} 



module.exports = {
    "create":create,
    "if_exists":check,
}