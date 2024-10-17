import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/styles";
import { AuthProvider } from "@/context/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import Sidebar from "@/components/sidebar";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isDashboardRoute = router.pathname === "/dashboard";

  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        {isDashboardRoute && <Sidebar />}
        <Component {...pageProps} />
        <ToastContainer />
      </AuthProvider>
    </>
  )
}
