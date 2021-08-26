import { Switch, Route } from "react-router";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { Dashboard } from "../pages/dashboard";
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
