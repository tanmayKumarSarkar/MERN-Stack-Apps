import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

    increment = () => {
      this.props.dispatch({type: "INCREMENT"});
    }

    decrement = () => {
      this.props.dispatch({type: "DECREMENT"});
    }

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <div>
            <button onClick={this.decrement}>&ndash;</button>
            <span className="count"> {this.props.count} </span>
            <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps) (Counter);
