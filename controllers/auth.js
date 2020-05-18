//controllers for authorization of Users.
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // password hasher
const jwt = require('jsonwebtoken');//jwt token


const User = require('../models/users');
const { request, response } = require('express');

const signup = (request,response,next)=>
{
    username = request.body.username;
    email = request.body.email;
    password = request.body.password;
    
    //encrypting the password for storage in the database
    bcrypt.hash(password,12)
    .then( password=>
        {
           return User.create({
                username:username,
                password:password,
                email:email,
            })
        } ).then( result=>{console.log(result);
                            response.json({ message:'user created',userId:result._id })                    })


}

const login = (request,response,next)=>
{
    username= request.body.username;
    password:request.body.paswsword;

    //get the user
    User.findOne({username:username}).then
    ( user=>{
        if(!user){
            err = new Error('User not found!!');
            err.StatusCode = 401; //setting the status code
            throw err;
        }
        loaded_user = user;
        return bcrypt.compare(password,user.password);
    } ).
    then( verified=>{
        //create token if verified
        if(verified){
            const token = jwt.sign({
                
                //payload for token:
                userId:loaded_user._id,
            },
            //specify jwt secret key :
            'JWTsecretkey1616',
            {expiresIn:"1h"}
            )

        }
    } )   
    
}

module.exports =  {"signup":signup,
                    "login":login}