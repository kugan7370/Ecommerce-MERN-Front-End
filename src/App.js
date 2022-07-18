import Header from "./Components/Header";
import styled from "styled-components";
import Home from "./Components/Home";
function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

const Container = styled.div`
width: 100vw;
`
export default App;
