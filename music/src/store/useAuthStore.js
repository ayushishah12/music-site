import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { auth } from '../firebase';
import { 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile 
} from "firebase/auth";

export const useAuthStore = create(
  persist(
    (set) => ({
      authUser: null,
      token: null,

      login: async (email, password) => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          set({ authUser: user });
          console.log("User signed in:", user);
        } catch (error) {
          console.error("Error signing in:", error.message);
        }
      },

      signup: async (name, email, password) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          await updateProfile(user, { displayName: name });

          set({ authUser: user });
          console.log("User created successfully:", user);
        } catch (error) {
          console.error("Error during signup:", error.message);
        }
      },

      logout: async () => {
        try {
          await signOut(auth);
          set({ authUser: null, token: null });
          localStorage.removeItem("auth-token"); 
          console.log("User logged out successfully.");
        } catch (error) {
          console.error("Error logging out:", error.message);
        }
      },
    }),
    {
      name: "auth-token", 
      getStorage: () => localStorage, 
    }
  )
);