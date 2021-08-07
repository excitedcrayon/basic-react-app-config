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

// when you are using the react-hot-loader dependency
export default hot(module)(App);