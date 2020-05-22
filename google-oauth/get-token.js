// gets the code from URL and sends request for token:
const queryString = require('query-string');
const axios = require('axios');
const { request } = require('express');

const get_token  = (request,response,next)=>{


    const urlParams = queryString.parseUrl(request.url);
    console.log(request.url)
    code = urlParams.query.code;
    console.log(code);

    if (urlParams.error) {
      console.log(`An error occurred: ${urlParams.error}`);
    } else {
      console.log(`The code is: ${urlParams.query.code}`);
    }
    
    getAccessTokenFromCode(code);
    
    async function getAccessTokenFromCode(code) {
      const { data } = await axios({
        url: 'https://oauth2.googleapis.com/token',
        method: 'post',
        data: {
          client_id: '',
          client_secret: '',
          redirect_uri: 'http://localhost:8080/get-token',
          grant_type: 'authorization_code',
          code,
        },
      });
      console.log(data,1); // { access_token, expires_in, token_type, refresh_token }
      request.gtoken = data.access_token;
      console.log(request)
      next();
      return data.access_token;
    };
    
   
}

module.exports = get_token;
