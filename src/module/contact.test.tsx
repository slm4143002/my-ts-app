import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Contact from "./contact";

jest.mock("./map", () => {
  return function DummyMap(props:any) {
    return (
      <div data-testid="map">
        {props.center.x}:{props.center.y}
      </div>
    );
  };
});

let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
});

it("should render contact information", () => {
  const center = { x: "0", y: "0" };
  act(() => {
    render(
      <Contact
        name="Joni Baez"
        email="test@example.com"
        site="http://test.com"
        center={center}
      />,
      container
    );
  });

  let _email, _site: HTMLHRElement | null;
  let  _map: HTMLDivElement | null;

  _email = container.querySelector("[data-testid='email']");
  _site = container.querySelector('[data-testid="site"]');
  _map = container.querySelector('[data-testid="map"]');

  if (_email) {
    expect(_email.getAttribute("href")).toEqual("mailto:test@example.com");
  }
  if (_site) {
    expect(_site.getAttribute("href")).toEqual("http://test.com");
  }
  if (_map) {
    expect(_map.textContent).toEqual("0:0");
  }
});
