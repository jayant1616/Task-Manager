//gets the url for auhtorization:

const { request, response } = require("express");
const queryString = require('query-string');

const URL = (request,response,next)=>{
    

const stringifiedParams = queryString.stringify({
  client_id: 'client id',
  redirect_uri: 'http://localhost:8080/get-token',
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ].join(' '), // space seperated string
  response_type: 'code',
  access_type: 'offline',
  prompt: 'consent',
});

const googleLoginUrl = `http://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

console.log(googleLoginUrl);

response.redirect(googleLoginUrl);
}

module.exports= URL;