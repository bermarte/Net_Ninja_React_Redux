import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
 
const store = createStore(rootReducer);
//we need Provider to pass the store into the application
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
