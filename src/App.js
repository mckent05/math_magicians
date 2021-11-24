import './App.css';
import React, { Component } from 'react';
import Calculator from './Component/Calculator';
import calculate from './Logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      Obj: {
      },
    };
  }

  onclick = (e) => {
    this.setState((prevState) => ({ Obj: calculate(prevState.Obj, e.target.dataset.id) }));
    this.setState((prevState) => ({ result: this.showResult(prevState.Obj, e.target.dataset.id) }));
  }

  showResult = (object, btnName) => {
    if (object.total && !object.operation && !object.next) {
      return object.total;
    } if (btnName === 'AC') {
      return 0;
    } if ('+-x÷%'.includes(btnName)) {
      return object.total;
    }
    return object.next || object.total;
  }

  render() {
    const result = this.state;
    return (
      <div className="App d-flex j-center a-center">
        <Calculator result={result.result} clickEvent={(event) => this.onclick(event)} />
      </div>
    );
  }
}

export default App;
