const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    title: "ComputerBuild"
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
