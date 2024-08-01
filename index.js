const { app, BrowserWindow } = require('electron')
const env = process.env.NODE_ENV || 'development';

// If development environment 
if (env === 'development') { 
  try { 
      require('electron-reloader')(module, { 
          debug: true, 
          watchRenderer: true
      }); 
  } catch (_) { console.log('Error'); }     
} 

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    titleBarStyle: 'hidden',
    fullscreen: true,
    icon: 'D:/Development/the-thing/logo.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
  },
  })

  win.loadFile('index.html')
}
if (require('electron-squirrel-startup')) app.quit();
app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})