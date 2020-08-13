import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Logout = () => {
  const { setIsAuth, setToken } = useContext(AuthContext)
  alert('Successful logout');
  localStorage.removeItem('app_token');
  setToken('')
  setIsAuth(false);
  return <Redirect to="/login" />
};

export default Logout;