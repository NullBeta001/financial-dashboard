import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { GlobalStyle, LayoutContainer, SidebarWrapper, MainContent, MainContentLogin } from "../styles/styles";
import { AuthProvider } from "@/context/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState<string>(router.pathname);
  const noSidebarRoutes = ["/"];
  const shouldShowSidebar = !noSidebarRoutes.includes(router.pathname);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const isLoginPage = router.pathname === "/";

  useEffect(() => {
    setSelectedMenu(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Financial Dash</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <AuthProvider>
        <GlobalStyle />
        <LayoutContainer>
          {!isLoginPage && (
            <Header
              onToggleSidebar={toggleSidebar}
              isSidebarVisible={isSidebarVisible}
            />
          )}
          {shouldShowSidebar && (
            <SidebarWrapper style={{ display: isSidebarVisible ? 'block' : 'none' }}>
              <Sidebar
                selectedMenu={selectedMenu}
              />
            </SidebarWrapper>
          )}
          {shouldShowSidebar ? (
            <MainContent>
              <Component {...pageProps} />
            </MainContent>
          ) : (
            <MainContentLogin>
              <Component {...pageProps} />
            </MainContentLogin>
          )}
        </LayoutContainer>
        <ToastContainer />
      </AuthProvider>
    </>
  );
}
