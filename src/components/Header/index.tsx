import { useAuth } from "@/context/AuthContext";
import { Divisor, HeaderContainer, UserComponent, UsernameDisplay, Tooltip } from "@/styles/styles";
import { Info, UserCircle } from "phosphor-react";

const Header = () => {
  const { name } = useAuth();

  return (
    <HeaderContainer>
      <UserComponent>
        <div className="info-wrapper">
          <Info size={22} />
          <Tooltip>Financial Dashboard: Manage your transactions and reports.</Tooltip>
        </div>
      </UserComponent>
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
