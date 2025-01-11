import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.Config";
import { GoogleAuthProvider } from "firebase/auth";
import { useAxiosPublic } from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const axiosPublic  =useAxiosPublic()
 
  const UpdateProfile=(name,photoUrl)=>{
    return updateProfile(auth.currentUser, {
      displayName:name, photoURL:photoUrl
    })
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
    
        const userInfo={email:currentUser.email}
        // get token
        axiosPublic.post("/jwt",userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem("access-token",res.data.token)
          }
        })

      }else{
        localStorage.removeItem("access-token")
        
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

const signinwithGoogle=()=>{
   setLoading(true)
   return signInWithPopup(auth,provider)

}


  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    signIn,
    logout,
    loading,UpdateProfile,
    signinwithGoogle
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
