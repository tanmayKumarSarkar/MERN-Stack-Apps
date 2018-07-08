import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    count : 0
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case "INCREMENT" : 
            return {
                count: state.count + 1
            };
        case "DECREMENT" : 
            return {
                count: state.count - 1
            };
        default: 
            return state;
    }
}

const store = createStore(reducer);

//store.dispatch({type: "INCREMENT"});

const App = () => (
    <div className="App">
        <Provider store={store}>
            <Counter />
        </Provider>    
      </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
