import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase_config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [dataLoad, setDataLoad] = useState(true);
  // crateUser
  const createUser = (email, password) => {
    setDataLoad(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const loginUser = (email, password) => {
    setDataLoad(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout suer
  const logOut = () => {
    setDataLoad(true);
    return signOut(auth);
  };

  // google user

  const loginGoogle = () => {
    setDataLoad(true)
    return signInWithPopup(auth, new GoogleAuthProvider())
  }

  //   oberveUser
  useEffect(() => {
    const changeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setDataLoad(false);
      console.log(currentUser);
    });
    return () => {
      changeAuth();
    };
  }, [loaded]);

  const userData = {
    createUser,
    loginUser,
    logOut,
    loginGoogle,
    user,
    loaded,
    setLoaded,
    dataLoad,
    setDataLoad,
  };

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
