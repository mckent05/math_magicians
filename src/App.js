import './App.css';
import React, { Component } from 'react';
import Calculator from './Component/Calculator';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: 10,
    };
  }

  onclick() {
    this.setState((prevState) => {
      console.log('i got clicked');
      return ({ result: prevState });
    });
  }

  render() {
    const result = this.state;
    return (
      <div className="App d-flex j-center a-center">
        <Calculator result={result.result} clickEvent={this.onclick} />
      </div>
    );
  }
}

export default App;
