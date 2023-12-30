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

## Env variables
https://vitejs.dev/guide/env-and-mode.html

## Json server
https://www.npmjs.com/package/json-server?activeTab=readme#getting-started  

Json server runs by default on port 300  
It is run using script:  
```
npm run json-server
```
Json server data is in filedb.json