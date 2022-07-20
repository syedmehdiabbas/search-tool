import { useState } from "react";
import { Container } from "@chakra-ui/react";
import Home from "./Home";
import Navbar from "./components/Navbar";

function App() {
  const [searchEngine, setSearchEngine] = useState("google");
  return (
    <Container maxW="full" minH="100vh" bg="gray.50" px={0}>
      <Navbar searchEngine={searchEngine} setSearchEngine={setSearchEngine} />
      <Home searchEngine={searchEngine} />
    </Container>
  );
}

export default App;
