const {app,BrowserWindow} = require('electron');
const ejsEngine = require('ejs-electron');

const request = require('request');
var api_config = require('./api/config/api.config');

let win

function loadHomePage(){

	win = new BrowserWindow({width:800,height:600});
  win.webContents.openDevTools()
  
  win.loadFile('./views/pages/index.ejs');

  win.on('closed', () => {
     win = null
  })
}



/////  MAC EVENTS
// mac OS specific events
// might need to kill the cookie & session here if possible
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


//not sure if the cookie dies during this event
//not sure if i need to call start session again
app.on('activate', () => {
   // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    loadHomePage() 
  }
})
/////  MAC EVENTS END



app.on('ready', loadHomePage)