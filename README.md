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
Root Component | root component that holds all the other components ```(<div id="root"></div>)```. Root component is defined in **index.html**

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
Start by creating the npm package.json file in the root folder
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

### Setup files and content

## Index.html
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0,   shrink-to-fit=no">
        <title>Basic App</title>
    </head>
    <body>
        <div id="root"></div>
        <noscript>
            Please enable JavaScript to view the site
        </noscript>
        <script src="../dist/bundle.js"></script>
    </body>
    </html>
```
The ```<div>``` component with the id selector **root** will serve as the Root component.
```<script src="../dist/bundle.js"></script>``` is for the bundle.js file that is built using webpack.

## index.js
```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App.js';

    ReactDOM.render(<App />, document.getElementById('root'));
```
index.js loads the App component into the Root component

## App.js
```javascript
    import React from 'react';
    import { hot } from 'react-hot-loader';
    import './App.css';

    const App = () => (
        <div className="App">
            <h1>Hello React App</h1>
        </div>
    );

    // default statement when exporting module without hot-loader
    // export default App;

    // when you are using the react-hot-loader dependency, otherwise comment out this line
    export default hot(module)(App);
```
App.js is using JSX.

## App.css
```css
    .App{
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1;
        color: #222;
    }
```
Basic styling for the App component