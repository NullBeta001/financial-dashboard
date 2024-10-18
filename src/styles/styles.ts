import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 430px;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 30px;
  color: #000000;
  margin: 20px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: #ccc;
`;

export const Subtitle = styled.h2`
  text-align: center;
  color: #b1b1b1;
  font-weight: 150;
`;

export const TextTitle = styled.p`
  text-align: center;
  color: #000000;
  font-weight: 150;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 0.1rem #b1b1b1;
  border-radius: 1px;
  font-size: 16px;
  margin-top: 15px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #58a4b0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #2a818e;
  }
`;

export const SidebarContainer = styled.div`
  width: 170px;
  height: 100vh;
  background-color: #f9f9f9;
  padding-top: 20px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  color: #f9f9f9;
  border-right: 1px solid;
  border-color: #b1b1b1;
`;

export const SidebarButton = styled.button`
  display: flex;
  gap: 6px;
  align-items: center;
  background-color: #f9f9f9;
  color: #000000;
  border: none;
  padding: 10px;
  margin-left: 2px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  height: 36px;
`;

export const SelectButton = styled.div`
  width: 4px;
  background-color: #1894f3;
  height: 36px;
  border-radius: 10px;
`;

export const ComponentButton = styled.div`
  display: flex;
  margin-left: 8px;
`;

export const LogoutButton = styled(SidebarButton)`
  display: flex;
  gap: 6px;
  align-items: center;
  background-color: #f9f9f9;
  color: #000000;
  border: none;
  padding: 10px;
  margin-left: 2px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  height: 36px;

  &:hover {
    background-color: red;
  }
`;

export const TitleName = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid;
  border-color: #ccc;
  margin-bottom: 20px;
  margin-left: 8px;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

export const YearSelect = styled.select`
  margin-left: 10px;
  padding: 5px;
  font-size: 16px;
`;

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 2px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const Card = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100px;
  gap: 4px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
  width: 100%;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
  color: #000000;
  font-weight: 600;
`;

export const StyledSelect = styled.select`
  padding: 4px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  font-size: 16px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #66afe9;
  }
`;

export const StyledInputDate = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  font-size: 16px;
  margin: 5px 0;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #66afe9;
  }
`;

export const SelectWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const SidebarWrapper = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  height: 100vh;
  position: relative;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const MainContentLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const ContentWrapperSidebar = styled.div`
  flex: 1;
  height: 100%;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  padding: 20px;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: bottom;
  margin-left: 1.4rem;
  font-size: 1rem;
`;

export const StyledSpanFinancial = styled.span`
  color: #1894f3;
  font-size: 16px;
`;

export const StyledSpanDash = styled.span`
  color: #6bf178;
`;

export const HeaderContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f9f9f9;
  max-height: 60px;
  width: 100%;
  border-bottom: 1px solid;
  border-color: #ccc;
`;

export const UsernameDisplay = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 100;
  color: #000000;
  margin-left: 4px;
`;

export const Divisor = styled.div`
  width: 1px;
  background-color: #ccc;
  height: 36px;
  border-radius: 10px;
`;

export const UserComponent = styled.div`
  display: flex;
  align-items: center;

  .info-wrapper {
    position: relative;
    display: inline-block;
  }

  .info-wrapper:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  top: 60%; /* Ajusta o espaço abaixo do ícone */
  left: 10%; /* Faz com que o tooltip fique à direita */
  transform: translateX(10%); /* Pequeno ajuste para deslocar o tooltip */
  opacity: 0;
  transition: opacity 0.3s;
  width: 220px;
  font-size: 12px;
  z-index: 1;

  /* Seta */
  &::after {
    content: "";
    position: absolute;
    top: -5px; /* Ajusta a seta para aparecer na parte superior */
    left: 5%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #555 transparent; /* Cor da seta para combinar com o fundo */
  }
`;
