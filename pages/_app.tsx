import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from "next";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthUserProvider } from '../lib/AuthUserProvider';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}; 

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <AuthUserProvider>
      <Component {...pageProps} />
      <ToastContainer 
      theme="colored"
      autoClose={3000}
      />
    </AuthUserProvider>
  )
}

export default MyApp
