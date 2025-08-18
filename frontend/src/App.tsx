/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: Main App component for SolidJS Aloe frontend application
*/

import { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/success" component={Success} />
      <Route path="/*all" component={NotFound} />
    </Router>
  );
};

export default App;
