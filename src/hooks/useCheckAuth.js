import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { displayName, email, photoURL, uid } = user;
      dispatch(
        login({
          uid,
          displayName,
          email,
          photoURL,
        })
      );
      dispatch(startLoadingNotes());
    });
  }, []);

  return { status };
};
