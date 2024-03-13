import { createContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import App from "../firebase/firebase.config";

export const UserAuthContext = createContext(null);
const AuthCountext = ({children}) => {
  const auth = getAuth(App)
  const [ user, setUser ] = useState();
  const googleProvider = new GoogleAuthProvider()
  const gitHubProvider = new GithubAuthProvider();

  const createAccountWithPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () =>
  {
    return signInWithPopup(auth, googleProvider)
  }

  const gitHubSignIn = () =>
  {
    return signInWithPopup(auth, gitHubProvider)
  }

  const authInfo = {
    user,
    setUser,
    createAccountWithPassword,
    googleSignIn,
    gitHubSignIn,
  };
  return (
    <UserAuthContext.Provider value={authInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthCountext;