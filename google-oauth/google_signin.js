// for sigin
const axios = require('axios');
const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const check_user = require('../functions/check_User')


const sigin = (request,response,next)=>
{
    access_token = request.gtoken;

getGoogleDriveFiles(access_token);

async function getGoogleDriveFiles(access_token) {
  const { data } = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  console.log(data); // { id, email, given_name, family_name }

  check_user.if_exists(data.email,data.email).then(result=>{
    console.log(result)
    if(result!==null){

      //create a jwt token:
      const jwt_token = jwt.sign(
        {
          //payload:
          email : result.email,
          userId: result._id,
        },
        //secret key:
        '',
        {expiresIn:'1h'},

      )
      response.json({
        jwt_token:jwt_token,
      });
        }
      else{
        console.log('entered else')
        username= data.email,
        check_user.create(username,data.name,data.email).
        then(result=>
          {
            //create jwt token:
            const jwt_token = jwt.sign(
              {
                //payload:
                email : result.email,
                userId: result._id,
              },
              //secret key:
              '',
              {expiresIn:'1h'},
      
            )
            //send response:
            response.json({
              jwt_token:jwt_token,
            });

          })
      }//else block

    
      
  })

  return data;
};
console.log('reached end');
}

module.exports = sigin;