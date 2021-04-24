import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "./hello";

let container :HTMLDivElement;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
 document.body.removeChild(container);
});

it("Hello test", () => {
  act(() => {
    render(<Hello name=""/>, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(()=> {
    render(<Hello name="slm"/>, container);
  });

  expect(container.textContent).toBe("hello,slm");
});
