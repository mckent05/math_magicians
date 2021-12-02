import operate from '../../Logic/operate';

describe('testing', () => {
  test('testing for operation logic', () => {
    expect(operate(4, 2, '-')).toEqual('2');
  });

  test('testing for operation logic', () => {
    expect(operate(4, 2, '+')).toEqual('6');
  });

  test('testing for operation logic', () => {
    expect(operate(4, 2, '÷')).toEqual('2');
  });

  test('testing for operation logic', () => {
    expect(operate(4, 2, 'x')).toEqual('8');
  });

  test('testing for operation logic', () => {
    expect(operate(60, 20, '-')).toEqual('40');
  });

  test('testing for operation logic', () => {
    expect(operate(40, 20, '+')).toEqual('60');
  });

  test('testing for operation logic', () => {
    expect(operate(15, 3, '÷')).toEqual('5');
  });

  test('testing for operation logic', () => {
    expect(operate(34, 2, 'x')).toEqual('68');
  });
});
