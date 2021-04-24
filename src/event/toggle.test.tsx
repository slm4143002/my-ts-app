import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Toggle from "./toggle";

let container: HTMLDivElement;
beforeEach(() => {
  // setup a DOM element as a render targetF
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  document.body.removeChild(container);
});

it("changes value when clicked", () => {
  const onChange = jest.fn();
  act(() => {
    render(<Toggle onChange={onChange} />, container);
  });

  // get ahold of the button element, and trigger some clicks on it
  const button = document.querySelector("[data-testid=toggle]");
  try {
    if (button != null && button != undefined) {
      expect(button.innerHTML).toBe("Turn on");

      act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(button.innerHTML).toBe("Turn off");

      act(() => {
        for (let i = 0; i < 5; i++) {
          button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
      });

      expect(onChange).toHaveBeenCalledTimes(6);
      expect(button.innerHTML).toBe("Turn on");
    } else {
      throw "異常は発生しました!";
    }
  } catch (error) {
    console.log(error);
  }
});
