import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import { ReactNode, useState } from "react";
import { ContentWrapperSidebar, LayoutContainer, MainContent, SidebarWrapper } from "@/styles/styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState<string>(router.pathname);

  const noSidebarRoutes = ["/"];
  const shouldShowSidebar = !noSidebarRoutes.includes(router.pathname);

  return (
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
      <MainContent>
        <ContentWrapperSidebar>
          {children}
        </ContentWrapperSidebar>
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
