import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {applyMiddleware, createStore} from 'redux';
import mainReducer from './redux/reducers/mainReducer'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const myStore = createStore(mainReducer, applyMiddleware(thunk))
ReactDOM.render(
    
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
