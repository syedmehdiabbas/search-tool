import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box textAlign="center">
      <Heading color="purple.900" textShadow="base">
        Search Better 🦸🏽‍♂️
      </Heading>
      <Text fontSize="large" mt={2} color="purple.900">
        Add superpowers to you google search!
      </Text>
    </Box>
  );
}

export default Header;
