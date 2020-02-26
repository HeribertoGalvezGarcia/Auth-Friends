import React from "react";
import {Redirect, Route} from "react-router-dom";


function PrivateRoute({component: Component, ...rest}) {
  return <Route {...rest} render={props => localStorage.getItem("token") ? <Component {...props} /> : <Redirect to="/login" />} />;
}

export default PrivateRoute;
