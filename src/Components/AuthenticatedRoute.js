// src/components/AuthenticatedRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticatedRoute = ({ element, isAuthenticated,path}) => {
    return isAuthenticated ? (
            element
        ) : (
            <Navigate to="/login" replace state={{ from: path }} />
        );
      };
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: '/login',
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.dataAdded,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
