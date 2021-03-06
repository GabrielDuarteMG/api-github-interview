import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Home from "../components/Home";
import Users from "../components/Users";
export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/users">
          <Users></Users>
        </Route>
        <Route path="/users/:userName">
          <Users component={Users}></Users>
        </Route>
        <Route
          exact
          path="/:userName"
          render={(props) => <Users {...props} />}
        />

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
