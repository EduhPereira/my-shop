import { Switch, Route, Redirect } from "react-router";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { Dashboard } from "../pages/dashboard";
import { useUser } from "../providers/userProvider";
export const Routes = () => {
  const { isLogged } = useUser();
  return (
    <Switch>
      <Route exact path="/">
        {isLogged ? <Redirect to="/dashboard" /> : <Login />}
      </Route>
      <Route path="/signup">
        {isLogged ? <Redirect to="/dashboard" /> : <Signup />}
      </Route>
      <Route path="/dashboard">
        {isLogged ? <Dashboard /> : <Redirect to="/" />}
      </Route>
    </Switch>
  );
};
