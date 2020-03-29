import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// screens
import Home from "./screens/Home/Home";
import HowItWorks from "./screens/HowItWorks/HowItWorks";
import Results from "./screens/Results/Results";

function App() {
  return (
    // <h2>My yummytoken is... {window.yummytoken}</h2>
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/results" component={Results} />
      </div>
    </Router>
  );
}

export default App;
