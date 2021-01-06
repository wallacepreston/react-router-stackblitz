import React from "react";
import "./style.css";
import {Route} from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Route path="/start">
        <p>Start editing to see some magic happen :)</p>
      </Route>
    </div>
  );
}
