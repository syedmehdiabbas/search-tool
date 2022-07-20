import { Container, Box } from "@chakra-ui/react";
import Home from "./Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container maxW="full" minH="100vh" bg="gray.50" px={0}>
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;
