import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./views/SignIn";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/sign-in" component={SignIn} exact />
    </BrowserRouter>
  );
}

export default App;
