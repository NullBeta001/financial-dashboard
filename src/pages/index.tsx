import { useState } from "react";
import { Button, Container, LoginBox, StyledInputDate, Title } from "../styles/styles";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();

  const handleLogin = () => {
    const isSuccess = login(username, password);
    if (isSuccess) {
      toast.success("Login successful!");
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <Container>
      <LoginBox>
        <Player
          autoplay
          loop
          src="https://lottie.host/44abdd4b-e3d8-4602-983b-a3cb64e11e6c/HqjtspK3un.json"
          style={{ height: "120px", width: "120px" }}
        />
        <Title>Financial Dash</Title>
        <StyledInputDate
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyledInputDate
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </LoginBox>
    </Container>
  );
}
