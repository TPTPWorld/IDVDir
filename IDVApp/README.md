# 🚀 Interactive Derivation Viewer stand-alone app using electron

**MAKE SURE YOU'RE IN IDVApp DIRECTORY**

- To install all necessary packages, run:

```bash
npm install --force
```

- Then run this if you've made changes

```bash
npm run build
```

- To start a dev version of the app, run:

```bash
npm run start
```

<br>

- To package the app into an executable, run:
- **MACOS**

```bash
electron-packager . "IDV App" --platform=darwin --asar --icon=favicon.icns --out=electron_executables
```

- **ALL PLATFORMS**

```bash
 electron-packager . "IDV App" --all --asar --icon=favicon.icns
```

- NOTE: wine64 might be needed to package the app for windows.
- NOTE: The --asar flag makes hides the source code from users.

### There is also a standalone HTML file that also works as IDV.

- Under IDVDir/IDVApp/html_standalone/idv.html
