store => state => UI => actions => reducer => store


1.  Connect the component to Redux.

export default connect(mapStateToProps) (Counter);


2.  mapStateToProps

const mapStateToProps = state => ({
  count: state.count
});


3.  Create the Store

const store = createStore(reducer);

4.  Create Reducer and assign initial state

const initialState = {
    count : 42
};

function reducer (state = initialState, action) {
    return state;
}


5.  Provide the store to the app 

 <Provider store={store}>
     <Counter />
 </Provider> 

6.  Wire up actions => dispatch action via store and perform action in reducer

store.dispatch({type: "INCREMENT"}); // directely from store

this.props.dispatch({type: "INCREMENT"}); // via component props

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

