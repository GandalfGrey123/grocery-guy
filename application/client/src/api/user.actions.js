import axios from "axios";
import api_config from './config/api.config';

import {
    storeUserEmail,
    storeToken,getToken,getEmail,
    openBrowserURL
} from '../electron-util/storage';


export const validateSession = () =>{
  axios({
    method: 'get',
    url: `http://${api_config.env+api_config.auth}`,      
    headers:{
     'sessiontoken': getToken(),
     'sessionemail': getEmail()
    } 
  }).then((res) =>{
    console.log(res.data.isValid == true);
  });
}

export const openRegistrationWindow = ()=>{
  openBrowserURL(`http://${api_config.env+api_config.registration}`);
}

export const userLogin = ( credentials , respondToUser, onError = () =>{})=>{
  axios({
     method: 'post',
     url: `http://${api_config.env+api_config.login}`,
     data: credentials,
  }).then((res) =>{ 
    
     storeToken(res.data.token)   	
     storeUserEmail(credentials.email)
     respondToUser(res.status);
  }).catch((error) =>{
  	 onError(error.response.status)
  });
}; 
