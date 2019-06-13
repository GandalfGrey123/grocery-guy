const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const isDev = require('electron-is-dev');

let win;

global.userLocalStorage ={
  authToken: 'fucker'
};

function createWindow(){
  win = new BrowserWindow({width: 900, height: 680, webPreferences: { webSecurity: false}});
  win.webContents.openDevTools()
  win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  win.on('closed', () => win = null);
};

app.on('ready', createWindow);

// ipcMain.on("storeAuthToken", (event, newToken) => {
//   console.log(newToken);
//   global.userLocalStorage = newToken;
// });

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});