import "./App.css";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router";
import Login from "./components/Login";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PleaseLogin from "./components/PleaseLogin";

function App() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
