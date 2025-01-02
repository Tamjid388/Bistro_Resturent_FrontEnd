import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/Firebase.Config";

export const AuthContext = createContext(null);
const auth =getAuth(app)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authInfo = {
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}</AuthContext.Provider>
  );
};
