import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// screens
import Home from "./screens/Home/Home";
import HowItWorks from "./screens/HowItWorks/HowItWorks";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/how-it-works" component={HowItWorks} />
      </div>
    </Router>
  );
}

export default App;
