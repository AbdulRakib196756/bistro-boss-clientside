import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase";

export const Authcontext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign in function
  const signin = (email, password) => {
    setLoading(true); // Correct usage of setLoading
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out function
  const logout = () => {
    setLoading(true); // Correct usage of setLoading
    return signOut(auth).then(() => setLoading(false));
  };

  // Create user function
  const createUser = (email, password) => {
    setLoading(true); // Correct usage of setLoading
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Set loading to false after fetching user
    });
    return () => unsubscribe();
  }, []);

  // Provide authentication info
  const authinfo = {
    user,
    loading,
    createUser,
    signin,
    logout,
    updateUser,
  };

  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
