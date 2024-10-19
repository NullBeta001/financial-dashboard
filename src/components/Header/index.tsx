import { useAuth } from "@/context/AuthContext";
import { Divisor, HeaderContainer, UserComponent, UsernameDisplay, BarTitle } from "@/styles/styles";
import { UserCircle, List, X } from "phosphor-react";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarVisible }) => {
  const { name } = useAuth();

  return (
    <HeaderContainer>
      <button onClick={onToggleSidebar} aria-label="Toggle Sidebar" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        {isSidebarVisible ? <X size={32} color="#1894f3" /> : <List size={32} color="#1894f3" />}
      </button>
      <BarTitle>
        Dashboard
      </BarTitle>
      {name && (
        <UserComponent>
          <Divisor />
          <UsernameDisplay>
            {name}
            <UserCircle size={34} weight="fill" color="#1894f3" />
          </UsernameDisplay>
        </UserComponent>
      )}
    </HeaderContainer>
  );
};

export default Header;
