import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContainer } from "./app.styles";
// Pages
import HomePage from "./pages/Home";
import PersonPage from "./pages/Person";

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/person/:name" component={PersonPage} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
