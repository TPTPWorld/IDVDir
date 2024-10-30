
const { app, BrowserWindow, ipcMain, dialog } = require("electron");

app.on("ready", () => {
  let mainWindow = new BrowserWindow({
    width: 1024,
    height: 800,
    icon: "favicon.icns",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  app.setAboutPanelOptions({
    applicationName: "IDV App",
    credits: "Developed by Daniel Li and Esteban Morales",
  });

  let sharedData = 'test';

  mainWindow.loadFile("templates/index.html");

  // Modify the send-data handler to use webContents
  ipcMain.on('send-data', (event, data) => {
    sharedData = data;
    mainWindow.loadFile('templates/idv.html').then(() => {
      // Send data once the page is loaded
      mainWindow.webContents.send('response-data', sharedData);
    });
  });
  
  // Keep this as a backup
  ipcMain.on('listen-for-data', (event) => {
    event.sender.send('response-data', sharedData);
  });

  // mainWindow.openDevTools();
});


//~ FILE STUFF
ipcMain.on("open-file-dialog", (event) => {
  dialog.showOpenDialog({properties: ["openFile"],}).then((result) => {

    // if its a good result, send the file path to the renderer
    if (!result.canceled) {
        event.sender.send("selected-file", result.filePaths[0]);
    }

  })

});

