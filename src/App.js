import Header from "./Components/Header";
import styled from "styled-components";
function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
width: 100vw;
`
export default App;
