import type { AppProps } from "next/app";
import { GlobalStyle, LayoutContainer, SidebarWrapper, MainContent, MainContentLogin } from "../styles/styles";
import { AuthProvider } from "@/context/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState<string>(router.pathname);
  const noSidebarRoutes = ["/"];
  const shouldShowSidebar = !noSidebarRoutes.includes(router.pathname);

  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <LayoutContainer>
          {shouldShowSidebar && (
            <SidebarWrapper>
              <Sidebar
                selectedMenu={selectedMenu}
                onChangeMenu={(newMenu) => {
                  setSelectedMenu(newMenu.route);
                  router.push(newMenu.route);
                }}
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
