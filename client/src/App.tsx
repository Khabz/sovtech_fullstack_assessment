import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContainer } from "./app.styles";
// Pages
import HomePage from "./pages/Home";

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
