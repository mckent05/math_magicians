import React from 'react';

import './Calculator.css';

const Calculator = (props) => {
  const tope = props;
  return (
    <div className="btn-cont d-flex j-center a-center">
      <div className="header-title">
        <h2>Let&apos;s do Some Maths</h2>
      </div>
      <div className="btn-container">
        <div className="result d-flex a-center">
          <p>
            {tope.result}
          </p>
        </div>
        <div className="first-row">
          <button className="button" data-id="AC" type="button" onClick={tope.clickEvent}>AC</button>
          <button className="button" data-id="+/-" type="button" onClick={tope.clickEvent}>+/-</button>
          <button className="button" data-id="%" type="button" onClick={tope.clickEvent}>%</button>
          <button className="button" data-id="&#247;" type="button" onClick={tope.clickEvent}>&#247;</button>
        </div>
        <div className="second-row">
          <button className="button" data-id="7" type="button" onClick={tope.clickEvent}>7</button>
          <button className="button" data-id="8" type="button" onClick={tope.clickEvent}>8</button>
          <button className="button" data-id="9" type="button" onClick={tope.clickEvent}>9</button>
          <button className="button" data-id="x" type="button" onClick={tope.clickEvent}>  x </button>
        </div>
        <div className="third-row">
          <button className="button" data-id="4" type="button" onClick={tope.clickEvent}>4</button>
          <button className="button" data-id="5" type="button" onClick={tope.clickEvent}>5</button>
          <button className="button" data-id="6" type="button" onClick={tope.clickEvent}>6</button>
          <button className="button" data-id="-" type="button" onClick={tope.clickEvent}>-</button>
        </div>
        <div className="fourth-row">
          <button className="button" data-id="1" type="button" onClick={tope.clickEvent}>1</button>
          <button className="button" data-id="2" type="button" onClick={tope.clickEvent}>2</button>
          <button className="button" data-id="3" type="button" onClick={tope.clickEvent}>3</button>
          <button className="button" data-id="+" type="button" onClick={tope.clickEvent}>+</button>
        </div>
        <div className="fifth-row">
          <button className="button zero" data-id="0" type="button" onClick={tope.clickEvent}>0</button>
          <button className="button" data-id="." type="button" onClick={tope.clickEvent}>.</button>
          <button className="button" data-id="=" type="button" onClick={tope.clickEvent}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
