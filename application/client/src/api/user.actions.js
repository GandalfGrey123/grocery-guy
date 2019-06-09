import axios from "axios";
import api_config from './config/api.config';

const {shell} = window.require('electron');

export const userLogin = ( credentials , respondToUser, onError = () =>{})=>{
    axios({
        method: 'post',
        url: `http://${api_config.env+api_config.login}`,
        data: credentials,
    }).then((res) =>{ 
       respondToUser(res.data);
    }).catch(onError)
}; 


export const redirectRegistration = () => {
    shell.openExternal(`http://${api_config.env+api_config.registration}`); 
};