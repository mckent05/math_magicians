/* eslint-disable react/prop-types, react/prefer-stateless-function */
import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  render() {
    const tope = this.props;
    return (
      <div className="btn-cont d-flex j-center a-center">
        <div className="result d-flex a-center">
          <p>
            {tope.result}
          </p>
        </div>
        <div className="btn-container">
          <div className="first-row">
            <button className="button" data-id="AC" type="button">AC</button>
            <button className="button" data-id="oper" type="button">+/-</button>
            <button className="button" data-id="oper" type="button">%</button>
            <button className="button" data-id="oper" type="button"> / </button>
          </div>
          <div className="second-row">
            <button className="button" data-id="number" type="button">7</button>
            <button className="button" data-id="number" type="button">8</button>
            <button className="button" data-id="number" type="button">9</button>
            <button className="button" data-id="oper" type="button">  x </button>
          </div>
          <div className="third-row">
            <button className="button" data-id="number" type="button">4</button>
            <button className="button" data-id="number" type="button">5</button>
            <button className="button" data-id="number" type="button">6</button>
            <button className="button" data-id="oper" type="button"> - </button>
          </div>
          <div className="fourth-row">
            <button className="button" data-id="number" type="button">1</button>
            <button className="button" data-id="number" type="button">2</button>
            <button className="button" data-id="number" type="button">3</button>
            <button className="button" data-id="oper" type="button"> + </button>
          </div>
          <div className="fifth-row">
            <button className="button zero" data-id="number" type="button">0</button>
            <button className="button" data-id="number" type="button"> . </button>
            <button className="button" data-id="number" type="button"> = </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
