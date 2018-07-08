import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';


const allReducer = combineReducers({
    products: productsReducer,
    user: userReducer
});

const initialState = {
    products: [{name:'iPhone'}, {name: 'iPad'}],
    user: 'Michale'
};

const store = createStore(
                                        allReducer, 
                                        initialState, 
                                        window.devToolsExtension && window.devToolsExtension() );

console.log(store.getState());

ReactDOM.render(
                            <Provider store={store} >
                                <App />
                            </Provider>    , document.getElementById('root'));
registerServiceWorker();
