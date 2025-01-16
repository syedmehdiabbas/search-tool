import React from "react";
import { Box, Heading, HStack, Text, Image } from "@chakra-ui/react";
import kungFu from "./../../../assets/kung-fu.png";

function Header() {
  return (
    <Box textAlign="center">
      <HStack justify="center">
        <Heading
          bgGradient="linear(to-r, pink.600, purple.600)"
          textColor="transparent"
          bgClip="text"
          textShadow="base"
          _selection={{ background: "pink.400", color: "purple.50" }}
        >
          Search Fu
        </Heading>
        <Image src={kungFu} w={12} />
      </HStack>
      <Text
        fontSize="large"
        mt={2}
        color="purple.900"
        _selection={{ background: "purple.100" }}
      >
        Add superpowers to your search skills!
      </Text>
    </Box>
  );
}

export default Header;
