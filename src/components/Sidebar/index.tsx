import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { LogoutButton, SidebarButton, SidebarContainer } from "../../styles/styles";

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
        <SidebarButton
          onClick={() => onChangeMenu({ route: "/dashboard" })}
          style={{ backgroundColor: selectedMenu === "/dashboard" ? "#ddd" : "initial" }}
        >
          Home
        </SidebarButton>
      </div>

      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
