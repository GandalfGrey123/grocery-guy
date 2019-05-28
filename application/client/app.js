const {app,BrowserWindow,ipcMain} = require('electron');
const ejsEngine = require('ejs-electron');

let win

loadHomePage = () => {
	win = new BrowserWindow({width:800,height:600});
  win.webContents.openDevTools()  
  win.loadFile('./views/pages/index.ejs');
  win.on('closed', () => {
     win = null
  })
}

//when to kill app
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//event when app closed but still active in doc
app.on('activate', () => {
  if (win === null) {
    loadHomePage() 
  }
})


app.on('ready', loadHomePage)

ipcMain.on('open-new-window',() =>{
 win.close()
 win = new BrowserWindow({width:800,height:600});
 win.webContents.openDevTools()
 win.loadFile('./views/pages/index.ejs');
});
