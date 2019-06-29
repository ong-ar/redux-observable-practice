import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { actionCreators as pingpongActions } from "./redux/modules/pingpong";

const mapStateToProps = state => {
  return {
    counter: state.pingpong
  };
};

const mapActionToProps = dispatch => ({
  increment: () => {
    dispatch(pingpongActions.updateCounter(1));
  },
  decrement: () => {
    dispatch(pingpongActions.updateCounter(-1));
  }
});

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h2>{props.counter}</h2>
        <button type="button" onClick={props.decrement}>
          -
        </button>
        <button type="button" onClick={props.increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(App);
