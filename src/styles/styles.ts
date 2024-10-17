import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #393939;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #393939;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 400px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #58a4b0;
  margin-top: 10px;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
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
  background-color: #28292d;
  padding-top: 20px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
`;

export const SidebarButton = styled.button`
  background-color: #58a4b0;
  color: white;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 0 4px 4px 0;
  font-size: 16px;

  &:hover {
    background-color: #2a818e;
  }
`;

export const LogoutButton = styled(SidebarButton)`
  background-color: red;

  &:hover {
    background-color: darkred;
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const YearSelect = styled.select`
  margin-left: 10px;
  padding: 5px;
  font-size: 16px;
`;

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 800px; /* Define a largura máxima para o gráfico */
  height: 400px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
