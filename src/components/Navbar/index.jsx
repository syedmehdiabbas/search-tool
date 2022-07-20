import { Box, HStack, Switch, Text } from "@chakra-ui/react";
import React from "react";
import Icon from "../Icon";
import duckduckgo from "./../../assets/duckduckgo.svg";
import google from "./../../assets/google.svg";

const Navbar = () => {
  return (
    <HStack
      w="full"
      justify="flex-end"
      alignItems="center"
      gap={1}
      px={[2, 4, 6]}
      h={[12, 12, 16]}
    >
      <Icon src={google} />
      <Switch colorScheme="purple" />
      <Icon src={duckduckgo} />
    </HStack>
  );
};

export default Navbar;
