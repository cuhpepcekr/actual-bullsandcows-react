import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/sign-up" component={SignUp} exact />
      <Route path="/sign-in" component={SignIn} exact />
      <Route path="/dashboard" component={Dashboard} exact />
    </BrowserRouter>
  );
}

export default App;
