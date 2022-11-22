
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';



const formatAuthUser = (user : any) => ({
  uid: user.uid,
  email: user.email
});

export default function useFirebaseAuth() {
    
  const [authUser, setAuthUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState : any) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return;
    }

    setLoading(true)
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);    
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null)
    setLoading(true)
  }
  const signOut = () => auth.signOut().then(clear)
// listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signOut
  };
}