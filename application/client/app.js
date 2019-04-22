const {app,BrowserWindow} = require('electron');
const ejsEngine = require('ejs-electron');

let win

function loadHomePage(){
	win = new BrowserWindow({width:800,height:600});
  win.webContents.openDevTools()
	win.loadFile('./views/pages/index.ejs');
	win.on('closed', () => {
     win = null
  })
}


// mac OS specific events
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    loadHomePage()
  }
})

app.on('ready', loadHomePage)