import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { LogoutButton, SidebarButton, SidebarContainer } from "../styles/styles";

const Sidebar = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <SidebarContainer>
      <div>
        <SidebarButton onClick={() => router.push("/dashboard")}>Home</SidebarButton>
      </div>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
