import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reducers/store";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./views/Dashboard";
import Users from "./views/Users";
import Referral from "./views/Referral";
import AuthLoading from "./components/AuthLoading";
import Connexion from "./views/Connexion";
import Inscription from "./views/Inscription";
import Prospects from "./views/Prospects";

function App() {
  return (
    <Provider store={store}>
      <AuthLoading>
        <Router>
          <Switch>
            <ProtectedRoute exact component={Dashboard} path="/" />
            <ProtectedRoute exact component={Users} path="/users" />
            <ProtectedRoute exact component={Referral} path="/referral" />
            <ProtectedRoute exact component={Prospects} path="/prospects" />
            <Route exact path="/connexion" component={Connexion} />
            <Route exact path="/inscription" component={Inscription} />
          </Switch>
        </Router>
      </AuthLoading>
    </Provider>
  );
}

export default App;
