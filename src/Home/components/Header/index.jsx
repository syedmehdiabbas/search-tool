import React from "react";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box textAlign="center">
      <HStack justify="center">
        <Heading
          bgGradient="linear(to-r, pink.500, purple.600)"
          textColor="transparent"
          bgClip="text"
          textShadow="base"
        >
          Search Better
        </Heading>
        <Heading>🦸🏽‍♂️</Heading>
      </HStack>
      <Text fontSize="large" mt={2} color="purple.900">
        Add superpowers to you google search!
      </Text>
    </Box>
  );
}

export default Header;
