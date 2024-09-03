const { app, BrowserWindow } = require('electron')
const env = process.env.NODE_ENV || 'development';
// var child = require('child_process').execFile;
// var executablePath = "D:/Development/the-thing/npp.8.6.9.Installer.x64.exe";

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
  // child(executablePath, function(err, data) {
  // if(err){
  //   console.error(err);
  // return;
  // }

  // console.log(data.toString());
  // });
}
if (require('electron-squirrel-startup')) app.quit();
app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})