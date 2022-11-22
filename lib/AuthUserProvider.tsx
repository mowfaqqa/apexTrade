import { createContext, useContext, Context, ReactNode } from 'react'
import useFirebaseAuth from './hooks/useFirebaseAuth'


const authUserContext = createContext({
  authUser: null,
  loading: true,
  signOut: async () => {}
});
export function AuthUserProvider({ children } : any) {
  const auth = useFirebaseAuth();
  return  <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);