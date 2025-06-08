import { AuthContext } from "./AuthContext";
import { auth } from "./../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = async (profileData) => {
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("No user is currently signed in");

      await updateProfile(user, {
        displayName: profileData.displayName,
        photoURL: profileData.photoURL,
      });

      setUser({
        ...user,
        displayName: profileData.displayName,
        photoURL: profileData.photoURL,
      });

      return true;
    } catch (error) {
      console.error("Profile update error:", error);

      await Swal.fire({
        title: "Update Failed",
        text: error.message || "Could not update profile",
        icon: "error",
        background: "#f5e9dc",
        confirmButtonColor: "#6f4e37",
      });

      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    createUser,
    signInUser,
    user,
    setUser,
    loading,
    signOutUser,
    updateUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
