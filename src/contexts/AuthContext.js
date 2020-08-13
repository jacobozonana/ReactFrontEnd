import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  useEffect(()=>{
    const item = localStorage.getItem("app_token");
    if (item) {
      setToken(item);
      setIsAuth(true);
    }
  })
  return (
    <AuthContext.Provider value={{ token, setToken, isAuth, setIsAuth }}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;