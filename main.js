const path = require("path");
const { app, BrowserWindow, Menu, ipcMain, shell } = require("electron");
const localShortcut = require("electron-localshortcut");

const { google } = require('googleapis');

const isMac = process.platform === 'darwin';

const isDev = process.env.NODE_ENV != "development";

// Create the main window
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Automation App",
        width: 1400,
        height: 750,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    // open dev tools if in dev environment;
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));

    // Enable paste functionality
    mainWindow.webContents.on("did-finish-load", () => {
        localShortcut.register(mainWindow, "CmdOrCtrl+V", () => {
          mainWindow.webContents.paste();
        });
    
        localShortcut.register(mainWindow, "CmdOrCtrl+A", () => {
          mainWindow.webContents.selectAll();
        });
      });
}
    

// About window
function AboutPage() {
    console.log("about page");
}

// App is ready
app.whenReady().then(() => {
    createMainWindow();

    // Implement menu
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

// menu-template
const menu = [
    ...(isMac ? [{
        label: app.name,
        submenu: [
            {
                label: 'About',
                click: AboutPage,
            }
        ]
    }] : []),
    {
        role: 'fileMenu',
    },
    ...(!isMac ? [{
        label: "Help",
        submenu: [
            {
                label: "About",
            }
        ]
    }] : [])
];

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit();
    }
});
