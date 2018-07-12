import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import {  updateUser, apiRequest } from './actions/userActions';

class App extends Component {

  onUpdateUser(e) {
    console.log(this.props);
    this.props.onUpdateUser(e.target.value);
  }

  componentDidMount(){
    this.props.onApiRequest();
  }

  render() {
    return (
      <div className="App">
        <input onChange= {this.onUpdateUser.bind(this)} />
        {this.props.user}{console.log(this.props)}
      </div>
    );
  }
}

// const mapStateToProps = (state, props) => {
//   return {
//     products: state.products,
//     user: state.user
//   }
// };

const productsSelector = createSelector(
  state => state.products,
  products => products
);

const userSelector = createSelector(
  state => state.user,
  user => user
);

const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products, user) => ({
    products,
    user
  })
);

const mapActionsToProps =  {
  onUpdateUser: updateUser,
  onApiRequest : apiRequest
};

// const mapActionsToProps = (dispatch, props) => {
//   return bindActionCreators ({
//     onUpdateUser: updateUser
//   }, dispatch);
// };

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   return {};
// }

export default connect (mapStateToProps, mapActionsToProps)(App);
