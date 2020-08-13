import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContext'
// Views
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Logout from "./Components/Logout.jsx";
import Register from "./Components/Signup.jsx";
import UsersList from "./Components/UsersList.jsx";

export default function Routes() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/users" component={UsersList} />
      </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

