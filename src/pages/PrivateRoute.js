import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children, ...theRest }) => {
  const { user } = useAuth0();
  console.log(children, theRest);
  return (
    <Route
      {...theRest}
      render={() => {
        return user ? children : <Redirect to="/" />;
      }}
    ></Route>
  );
};
export default PrivateRoute;
