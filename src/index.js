import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Tasks from "./Tasks";

render(
  <div>
    <DevTools />
    <p>aaaaaaaaaaaaaaaaaaa</p>
    <Tasks/>
  </div>,
  document.getElementById("root")
);
