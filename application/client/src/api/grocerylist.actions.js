import axios from "axios";
import api_config from './config/api.config';

//get information from local storage about current user
import {
   getToken, getEmail
} from '../electron-util/storage';

export const createGroceryList = (title,handleResponse) =>{
  axios({
    method: 'post',
    url: `http://${api_config.env + api_config.newGrocery}`,
    data: {
    	'authToken': getToken(),
     'userEmail': getEmail(),
    	'groceryTitle': title,
    },
  }).then((res) =>{         
     handleResponse()
  }).catch((error) =>{
  	 console.log('error occured while creating grocery lists\n\n' + error)
  });
}

export const addGroceryItems = (data, handleResponse) =>{
  axios({
    method: 'post',
    url: `http://${api_config.env + api_config.addItemsGroceryList}`,
    data: {
     'authToken': getToken(),
     'userEmail': getEmail(),
     'groceryListId': data.id,
     'items': data.newItems,
    },
  }).then((res) =>{         
     handleResponse(res.data.userData);
  }).catch((error) =>{
     console.log('error occured while creating grocery lists\n\n' + error)
  });
}

export const getAllUsersLists = (handleResponse) =>{
  axios({
    method: 'get',
    url: `http://${api_config.env + api_config.allLists}`,      
    headers:{
     'authToken': getToken(),
     'userEmail': getEmail(),
    } 
  }).then((res) =>{
  console.log(res.data.userData)
     handleResponse(res.data.userData);
  }).catch((error)=>{ 
     console.log('error occured while creating grocery lists\n\n' + error)
  });
}
