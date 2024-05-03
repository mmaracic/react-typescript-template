# README  
Created with:  
```
npm create vite@latest frontend-template -- --template react-ts
npm install @mui/material @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material
npm install json-server
```
Includes:  
* Vite build tool 4.5.1
* React 18
* Typescript 5
* MUI 5
* Json Server

Requirements
* Visual Sudio Code version above 1.77 (Vite 4.3.3 requirement)
https://stackoverflow.com/questions/76071355/vite-default-template-giving-error-in-vscode-moduleresolution-bundler

## Starting
If packages have not yet been fetched run
```
npm install
```
If the install ends with reported vulnerabilities  
```
npm audit fix
```
can be run to try and upgrade dependencies in package-lock.json  

Run and build scripts are in package.json. Execute one of them e.g.
```
npm run dev
```
Vite run and build script options: https://vitejs.dev/guide/cli.html

### Updateing packages in package.json

Can use npm-check-updates package https://www.npmjs.com/package/npm-check-updates  
Install
```
sudo npm install -g npm-check-updates
```

Get list of packages that need update (suggestions)  
```
ncu
```

Update package.json according to suggestions while keeping higher version suggestions:  
```
ncu -u
```

Warning 1: The Proposed updates can create dependency collisions so manual downgrade of some packages might be needed after update to keep everything consistent.

#### Issues 
If the ncu script is failing on Windows with error that running scripts is disabled run in Windows Admin Powershell:
```
Set-ExecutionPolicy RemoteSigned
```
Source: https://stackoverflow.com/questions/41117421/ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system 2nd answer.

### Updateing NPM packages
https://stackoverflow.com/questions/10972176/find-the-version-of-an-installed-npm-package
https://docs.npmjs.com/updating-packages-downloaded-from-the-registry

To get a version of the npm package use (-g for global; omit package name to get all packages):
```
npm list [-g] <package_name>
```

To check for outdated packages use:
```
npm outdated [-g]
```
-g flag checks global packages.  

To update all outdated packages use (-g for global):
```
npm update [-g]
```

To update a single outdated package use (add -g if the package is global): 
```
npm update [-g] <package_name>
```

## Building for production
Run:
```
npm run build
```
The code is tested and then production files are built.  
The production files are placed in **dist** folder by default.
## Env variables
https://vitejs.dev/guide/env-and-mode.html

## Json server
https://www.npmjs.com/package/json-server?activeTab=readme#getting-started  
https://github.com/typicode/json-server/tree/v0  
Json server runs by default on port 300  
It is run using script:  
```
npm run json-server
```
Json server data is in file db.json