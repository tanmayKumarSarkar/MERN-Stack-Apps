import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  updateUser } from './actions/userActions';

class App extends Component {

  onUpdateUser(e) {
    console.log(this.props);
    this.props.onUpdateUser(e.target.value);
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

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user
  }
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators ({
    onUpdateUser: updateUser
  }, dispatch);
};

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   return {};
// }

export default connect (mapStateToProps, mapActionsToProps)(App);
