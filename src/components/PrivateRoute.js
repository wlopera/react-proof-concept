import React from "react";
import { Route, Redirect } from "react-router-dom";

// const PrivateRoute = (props) => {
//     return (
//       <Route exact={props.exact} path={props.path} component={props.component} />
//     );
// };

// const PrivateRoute = (props) => {
//   return <Route {...props} />;
// };

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;
