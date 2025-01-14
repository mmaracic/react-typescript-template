# README
## Building and deploying the app
The app is built using Github pipeline as outlined in the .github\workflows\auure-static-web-apps-*.yml file

Build and deploy is started on commit and it uses /dist folder content.

So the procedure to build and deploy is:
* Run
    ```
    npm run build
    ```
    so that Vite would build the app from source locally and rewrite the /dist folder
* Commit the codebase including the /dist folder which will then be deployed to the static web app site.