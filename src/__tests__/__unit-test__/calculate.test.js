import calculate from '../../Logic/calculate';

describe('calculate function', () => {
  const obj = {};
  const button = '10';

  test('Intialize the obj', () => {
    const newObj = { next: '10', total: null };
    expect(calculate(obj, button)).toEqual(newObj);
  });

  test('When a second value in press', () => {
    const obj = { next: '10', total: null };
    const newObj = { next: '1010', operation: undefined, total: null };
    expect(calculate(obj, button)).toEqual(newObj);
  });

  test('When operator is press', () => {
    const obj = { next: '10', total: null };
    const newObj = { next: null, operation: '+', total: '10' };
    const button = '+';
    expect(calculate(obj, button)).toEqual(newObj);
  });

  test('When a equal is pressed', () => {
    const obj = { next: '3', operation: '+', total: '10' };
    const newObj = { next: null, operation: null, total: '13' };
    const button = '=';
    expect(calculate(obj, button)).toEqual(newObj);
  });

  test('When a AC key is pressed', () => {
    const obj = {
      next: null, operation: null, total: '13',
    };
    const newObj = { next: null, operation: null, total: null };
    const button = 'AC';
    expect(calculate(obj, button)).toEqual(newObj);
  });

  test('When a plus minus key is pressed', () => {
    const obj = { next: '3' };
    const newObj = { next: '-3' };
    const button = '+/-';
    expect(calculate(obj, button)).toEqual(newObj);
  });

  test('When a plus minus key is pressed', () => {
    const obj = { next: '3', operation: '+', total: '10' };
    const newObj = { next: '-3', operation: '+', total: '10' };
    const button = '+/-';
    expect(calculate(obj, button)).toEqual(newObj);
  });

  test('When a equal key is pressed with plus minus operator', () => {
    const obj = { next: '3', operation: '+', total: '10' };
    const newObj = { next: '-3', operation: '+', total: '10' };
    const result = { next: null, operation: null, total: '13' };
    const button = '+/-';
    expect(calculate(obj, button)).toEqual(newObj);
    const equal = '=';
    expect(calculate(obj, equal)).toEqual(result);
  });
});
