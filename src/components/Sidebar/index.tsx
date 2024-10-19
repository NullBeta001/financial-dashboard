import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { ComponentButton, LogoutButton, SelectButton, SidebarButton, SidebarContainer, StyledContainer, StyledSpanDash, StyledSpanFinancial, Subtitle, TextTitle, TitleName } from "../../styles/styles";
import { ChartBar, ChartLineUp, Factory, PresentationChart, SignOut } from "phosphor-react";

interface SidebarProps {
  selectedMenu: string;
  onChangeMenu: (newMenu: { route: string }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedMenu, onChangeMenu }) => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <SidebarContainer>
      <div>
        <TitleName>
          <PresentationChart size={32} color="#1894F3" />
          <div>
            <StyledContainer>
              <StyledSpanFinancial>F</StyledSpanFinancial>
              <TextTitle>inancial</TextTitle>
            </StyledContainer>
            <StyledContainer>
              <StyledSpanDash>D</StyledSpanDash>
              <TextTitle>ash</TextTitle>
            </StyledContainer>
          </div>
        </TitleName>
        <ComponentButton>
          {selectedMenu === "/dashboard" && <SelectButton />}
          <SidebarButton
            onClick={() => onChangeMenu({ route: "/dashboard" })}
            style={{ backgroundColor: selectedMenu === "/dashboard" ? "#ddd" : "initial", color: selectedMenu === "/dashboard" ? "#1894F3" : "initial" }}
          >
            <ChartBar size={22} />
            Dashboard
          </SidebarButton>
        </ComponentButton>
        <ComponentButton>
          {selectedMenu === "/analytics" && <SelectButton />}
          <SidebarButton
            onClick={() => onChangeMenu({ route: "/analytics" })}
            style={{ backgroundColor: selectedMenu === "/analytics" ? "#ddd" : "initial", color: selectedMenu === "/analytics" ? "#1894F3" : "initial" }}
          >
            <ChartLineUp size={22} />
            Analytics
          </SidebarButton>
        </ComponentButton>
        <ComponentButton>
          {selectedMenu === "/industries" && <SelectButton />}
          <SidebarButton
            onClick={() => onChangeMenu({ route: "/industries" })}
            style={{ backgroundColor: selectedMenu === "/industries" ? "#ddd" : "initial", color: selectedMenu === "/industries" ? "#1894F3" : "initial" }}
          >
            <Factory size={22} />
            Industries
          </SidebarButton>
        </ComponentButton>
      </div>
      <ComponentButton>
        <LogoutButton onClick={handleLogout}>
          <SignOut size={22} />
          Logout
        </LogoutButton>
      </ComponentButton>
    </SidebarContainer>
  );
};

export default Sidebar;
