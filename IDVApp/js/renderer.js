
const { ipcRenderer } = require("electron")
const fs = require('fs')

//~ FILE UPLOADINGS
document.getElementById("fileUploadBtn").addEventListener("click", () => {
  ipcRenderer.send("open-file-dialog")

  ipcRenderer.on("selected-file", (event, filePath) => {

    // put the filepath into a p tag
    document.getElementById("filePath").textContent = `Selected file: ${filePath}`

    // read that file
    fs.readFile(filePath, 'utf-8', (err, data) => {
        // if (err) {
        //   console.error('An error occurred reading the file:', err)
        //   return
        // }
        document.getElementById('fileContents').textContent = `File Contents:\n${data}`
    })

  })

})


//~ PASS PROOF TO IDV.HTML
document.querySelector("#visualizeBtn").addEventListener("click", () => {
    const fileContentsElement = document.getElementById("fileContents");
    const rawContent = fileContentsElement.textContent.replace('File Contents:\n', '');
    ipcRenderer.send('send-data', rawContent);
});