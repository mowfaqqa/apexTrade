
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { Router, useRouter } from 'next/router';
import { notifyError, notifySuccess } from '../notifications';



const formatAuthUser = (user : any) => ({
  uid: user.uid,
  email: user.email
});

export default function useFirebaseAuth() {
    const router = useRouter()
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
    router.push('/')
    notifySuccess('Signed Out')
  }
  const signOut = () => auth.signOut().then(() => clear())
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