const { shell,remote } = window.require('electron');

const electronStorage = "userLocalStorage"

export const storeUserEmail = (email)=>{
 remote.getGlobal(electronStorage).userEmail = email
}

export const storeToken = (tok) => { 
  remote.getGlobal(electronStorage).authToken = tok
};

export const getToken = () => {
  return remote.getGlobal(electronStorage).authToken
};

export const getEmail = () => {
  return remote.getGlobal(electronStorage).userEmail
};

export const openBrowserURL = (url) => {
  shell.openExternal(url); 
};