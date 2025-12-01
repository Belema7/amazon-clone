import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';

const ProtectedRoute = ({ children, msg, redirect }) => {
  const [{ user }] = useContext(DataContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate 
        to="/auth" 
        replace 
        state={{
          msg,
          redirect,
          from: location.pathname
        }}
      />
    );
  }

  return children;
};

export default ProtectedRoute;
