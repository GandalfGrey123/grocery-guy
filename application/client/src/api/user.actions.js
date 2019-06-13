import axios from "axios";
import api_config from './config/api.config';

const {shell} = window.require('electron');
const {remote} = window.require( "electron" );


//turn these three electron functions into utility folder
export const storeToken = (tok) => { 
  remote.getGlobal('userLocalStorage').authToken = tok
}

export const getToken = () => {
  return remote.getGlobal('userLocalStorage').authToken
}


export const redirectRegistration = () => {
    shell.openExternal(`http://${api_config.env+api_config.registration}`); 
};


export const userLogin = ( credentials , respondToUser, onError = () =>{})=>{

    axios({
        method: 'post',
        url: `http://${api_config.env+api_config.login}`,
        data: credentials,
    }).then((res) =>{ 
       storeToken(res.data.token)   	
       respondToUser(res.status);
    }).catch((error) =>{
    	onError(error.response.status)
    })
}; 
