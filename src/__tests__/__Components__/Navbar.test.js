import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Navbar from '../../Component/Navbar';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('testing for the UI of Navbar', () => {
  act(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
      container,
    );
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
