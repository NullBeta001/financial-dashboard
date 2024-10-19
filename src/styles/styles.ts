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
  background-color: #868686;
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

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: 410px;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 30px;
  color: #000000;
  margin: 20px;

  @media (max-width: 500px) {
    font-size: 24px;
    text-align: center;
    color: #000000;
    margin: 10px;
  }
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
  background-color: #1894f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #1272bb;
  }
`;

export const SidebarContainer = styled.div`
  width: 170px;
  height: 100%;
  background-color: #f9f9f9;
  padding-top: 20px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  left: 0;
  color: #f9f9f9;
  border-right: 1px solid #b1b1b1;
  transition: all 0.52s;
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
  padding: 10px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-top: 70px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 705px) {
    justify-content: space-between;
    gap: 2px;
  }
`;

export const SelectWrapper = styled.div`
  margin-bottom: 1rem;

  @media (max-width: 705px) {
    flex: 1 1 calc(50% - 10px);
  }
`;

export const YearSelect = styled.select`
  margin-left: 10px;
  padding: 5px;
  font-size: 16px;
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 570px) {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`;

export const BarChartWrapper = styled.div`
  flex: 0.7;
  padding-right: 1rem;
  height: 65vh;

  @media (max-width: 570px) {
    flex: 0.5;
    width: 100%;
    height: 50vh;
    align-items: center;
  }
`;

export const LineChartWrapper = styled.div`
  flex: 0.3;
  padding-left: 1rem;
  height: 65vh;

  @media (max-width: 570px) {
    flex: 0.5;
    width: 100%;
    height: 100vh;
    align-items: center;
  }
`;

export const ContentWrapper = styled.div`
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;

export const Card = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100px;
  gap: 4px;

  @media (max-width: 920px) {
    width: 140px;
    height: 80px;
    padding: 10px;
  }

  @media (max-width: 570px) {
    width: 40%;
    height: 45px;
  }
`;

export const CardContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  max-width: 900px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 920px) {
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  @media (max-width: 570px) {
    margin-top: 2px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const TitleCard = styled.p`
  text-align: center;
  font-size: 1.8rem;
  color: #000000;

  @media (max-width: 920px) {
    text-align: center;
    font-size: 1.2rem;
  }

  @media (max-width: 570px) {
    text-align: center;
    font-size: 1rem;
  }
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

export const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100% - 60px);
  background-color: #f9f9f9;
  z-index: 999; /* Abaixo do header */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: 2.2s cubic-bezier(0.36, -0.01, 0, 0.77);
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

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: #ccc;
`;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #f9f9f9;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
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

export const DivisorDash = styled.div`
  width: 1px;
  background-color: #ccc;
  height: 100px;
  border-radius: 10px;

  @media (max-width: 570px) {
    display: none;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #b1b1b1;
  font-weight: 100;

  @media (max-width: 920px) {
    font-size: 0.8rem;
    text-align: center;
    color: #b1b1b1;
    font-weight: 100;
  }
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
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
`;

export const HeadTitle = styled.p`
  font-size: 2rem;

  @media (max-width: 880px) {
    display: none;
  }
`;

export const BarTitle = styled.p`
  display: none;

  @media (max-width: 880px) {
    display: block;
    font-size: 1.4rem;
  }
`;

export const GenericComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
