import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


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