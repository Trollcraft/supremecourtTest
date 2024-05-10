console.log("main process working");

const electron = require("electron");
const { on } = require("events");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const ipc = electron.ipcMain
let win;

ipc.on("openWiki", function(event, link){
    let wiki = new BrowserWindow({parent: win, modal: true})
    wiki.loadURL(link)
})


function createWindow(){
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
    }))

    win.on("closed", () => {
        win = null;
    })
}

app.on("ready", createWindow);