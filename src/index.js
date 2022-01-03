import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Products from "./Products";

render(
  <div>
    <DevTools />
    <p>aaaaaaaaaaaaaaaaaaa</p>
    <Products/>
  </div>,
  document.getElementById("root")
);
