import { Box, HStack, Switch, Text } from "@chakra-ui/react";
import React from "react";
import Icon from "../Icon";
import duckduckgo from "./../../assets/duckduckgo.svg";
import google from "./../../assets/google.svg";

const Navbar = ({ searchEngine, setSearchEngine }) => {
  const handleSearchEngineChange = () => {
    if (searchEngine === "google") {
      setSearchEngine("duckduckgo");
      return;
    }
    setSearchEngine("google");
    return;
  };

  return (
    <HStack
      w="full"
      justify="flex-end"
      alignItems="center"
      gap={1}
      px={[2, 4, 6]}
      h={[14, 14, 16]}
    >
      <Icon src={google} />
      <Switch
        onChange={handleSearchEngineChange}
        isChecked={searchEngine === "duckduckgo"}
        colorScheme="purple"
      />
      <Icon src={duckduckgo} />
    </HStack>
  );
};

export default Navbar;
