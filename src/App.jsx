import { Container, Box } from "@chakra-ui/react";
import Home from "./Home";

function App() {
  return (
    <Container maxW="full" minH="100vh" bg="gray.50" px={0}>
      <Home />
    </Container>
  );
}

export default App;
