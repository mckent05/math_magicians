import './App.css';
import React, { useState } from 'react';
import Calculator from './Component/Calculator';
import calculate from './Logic/calculate';

const App = () => {
  const showResult = (object, btnName) => {
    if (object.total && !object.operation && !object.next) {
      return object.total;
    } if (btnName === 'AC') {
      return 0;
    } if ('+-x÷%'.includes(btnName)) {
      return object.total;
    }
    return object.next || object.total;
  };

  const [obj, setObj] = useState({});
  const [result, setResult] = useState(0);

  const onclick = (e) => {
    const newObj = calculate(obj, e.target.dataset.id);
    setObj(newObj);
    const newResult = showResult(newObj, e.target.dataset.id);
    setResult(newResult);
  };

  return (
    <div className="App d-flex j-center a-center">
      <Calculator result={result} clickEvent={(event) => onclick(event)} />
    </div>
  );
};

export default App;
