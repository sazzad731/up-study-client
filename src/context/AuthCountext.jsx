import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import App from "../firebase/firebase.config";

export const UserAuthContext = createContext(null);

const AuthCountext = ({children}) => {
  const [ user, setUser ] = useState();
  const [ loading, setLoading ] = useState(true);
  const auth = getAuth(App)
  const googleProvider = new GoogleAuthProvider()
  const gitHubProvider = new GithubAuthProvider();

  const createAccountWithPassword = (email, password) =>
  {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginAccountWithPassword = (email, password) =>
  {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () =>
  {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const gitHubSignIn = () =>
  {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider)
  }

  const verifyEmail = () =>
  {
    return sendEmailVerification(auth.currentUser)
  }

  const updateUserProfile = (profile) =>
  {
    return updateProfile(auth.currentUser, profile)
  }

  const userSignOut = () =>
  {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() =>
  {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
    {
      if (currentUser === null || currentUser.emailVerified)
      {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [auth])

  const authInfo = {
    user,
    loading,
    setLoading,
    setUser,
    createAccountWithPassword,
    loginAccountWithPassword,
    googleSignIn,
    gitHubSignIn,
    verifyEmail,
    updateUserProfile,
    userSignOut,
  };
  return (
    <UserAuthContext.Provider value={authInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthCountext;