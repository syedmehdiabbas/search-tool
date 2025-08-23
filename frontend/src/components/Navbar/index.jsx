import { Box, HStack, Switch, Text } from "@chakra-ui/react";
import React from "react";
import Icon from "../Icon";
import duckduckgo from "./../../assets/duckduckgo.svg";
import google from "./../../assets/google.svg";

const Navbar = ({ searchEngine, setSearchEngine }) => {

  return (
    <HStack
      w="full"
      justify="flex-end"
      alignItems="center"
      gap={1}
      px={[2, 4, 6]}
      h={[14, 14, 16]}
    >
      <Box 
        borderWidth={2} 
        border="2px solid #B794F4" 
        padding={1}
        rounded="md"
      >
        <Icon 
          src={google} 
        />
      </Box>
      {/* <Switch
        onChange={handleSearchEngineChange}
        isChecked={searchEngine === "duckduckgo"}
        colorScheme="purple"
      />
      <Icon src={duckduckgo} /> */}
    </HStack>
  );
};

export default Navbar;
