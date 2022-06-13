import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box textAlign="center">
      <Heading color="purple.900" textShadow="base">
        Let's Search Better 🕵🏽‍♂️
      </Heading>
      <Text fontSize="large" mt={2} color="purple.900">
        Making it easy to get better google search results!
      </Text>
    </Box>
  );
}

export default Header;
