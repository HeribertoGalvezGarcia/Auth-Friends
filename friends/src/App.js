import React from 'react';
import {Route, Redirect} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import FormikLoginForm from "./components/Login";
import Friends from "./components/Friends";

function App() {
  return (
    <div>
      <Route path="/login" component={FormikLoginForm} />
      <PrivateRoute path="/friends" component={Friends} />
      <Route exact path="/" >
        <Redirect to={localStorage.getItem("token") ? "/friends" : "/login"} />
      </Route>
    </div>
  );
}

export default App;
