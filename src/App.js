import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [screen, setScreen] = useState('login')

  const onClickSetScreen = (screenName) => {
    setScreen(screenName)
  }

  const displayScreen = () => {
    
    switch (screen) {
      case 'login':
        return <TelaLogin onClickSetScreen={onClickSetScreen}/>;
      case 'register':
        return <TelaCadastro onClickSetScreen={onClickSetScreen}/>;
      default:
        return <TelaUsuarioCadastrado/>;
    }

  }

  return (
    <MainContainer >
      <GlobalStyled />
      {displayScreen()}
    </MainContainer>
  );
}

export default App;