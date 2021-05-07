import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

import Home from "../components/Home";
import Users from "../components/Users";
export default function Routers() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Switch>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </HashRouter>
  );
}
