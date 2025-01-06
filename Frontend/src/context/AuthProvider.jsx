import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  const initialAuthAdmin = localStorage.getItem("Admin");
  const [authAdmin, setAuthAdmin] = useState(
    initialAuthAdmin ? JSON.parse(initialAuthAdmin) : undefined
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, authAdmin, setAuthAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
