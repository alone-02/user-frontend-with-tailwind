import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [signIn, setSignIn] = useState(false);

  return (
    <AuthContext.Provider value={{ signIn, setSignIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
