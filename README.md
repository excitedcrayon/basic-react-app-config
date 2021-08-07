# basic-react-app-config
This serves as a guide to creating a barebones React.js app without boilerplate code.

## Dependency packages used
- webpack
- react-Hot-Loader

## Guide to creating an app without boilerplate code
File | Purpose
-----| -------
index.html | renders the view to the client
ES6 Support | modern JS syntax. This is done through Babel compiler
Webpack | build apps, css modules for styling and serve the app during development
Root Component | root component that holds all the other components (<div id="root"></div>). Root component is defined in index.html

## Basic React Structure
public/
public/index.html
src/
src/App.css
src/App.js
src/index.js
.babelrc
package-lock.json
package.json
webpack.config.js

## Create base folders and files
The base folders and files are;
* public
```
   mkdir public
```
* src
```
   mkdir src
``` 
* index.html 
```
   touch public/index.html
```
* index.js
```
   touch src/index.js
```

## Install Babel package
```
  npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
```