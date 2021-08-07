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
```tree
    ├── .babelrc
    ├── node_modules
    ├── package.json
    ├── package-lock.json
    ├── public
    │   └── index.html
    ├── README.md
    ├── src
    │   ├── App.css
    │   ├── App.js
    │   └── index.js
    └── webpack.config.js
```

## Create base folders and files
Start by creating the npm package.json file
```
   npm init -y
```

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
* .babelrc
```
   touch .babelrc
```

## Install the required packages
Package Dependencies | Command Line Argument
-------------------- | ---------------------
Babel                | npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
React and ReactDOM   | npm install react react-dom
Webpack              | npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
React-Hot-Loader     | npm install --save-dev react-hot-loader