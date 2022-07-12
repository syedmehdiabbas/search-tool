import { Container, Box } from "@chakra-ui/react";
import Home from "./Home";

function App() {
  return (
    <Container maxW="full" minH="100vh" bg="gray.50" px={0}>
      <Box minH={1} bgGradient="linear(to-r, pink.400, purple.400)" w="full" />
      <Home />
    </Container>
  );
}

export default App;
