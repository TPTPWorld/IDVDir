
const { ipcRenderer } = require('electron');

// Request data immediately when page loads
ipcRenderer.send('listen-for-data');

// Set up the response listener
ipcRenderer.on('response-data', (event, data) => {
  document.querySelector("#proofText").textContent = data;
});
