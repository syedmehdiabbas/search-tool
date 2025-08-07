import React from "react";
import { Input } from "@chakra-ui/react";

function SearchInput({ input, handleInput }) {
  return (
    <Input
      type="search"
      placeholder="search"
      size="lg"
      variant="outline"
      border="1px"
      borderColor="gray.400"
      focusBorderColor="purple.300"
      value={input}
      onChange={handleInput}
      rounded="full"
      autoFocus
      _hover={{ borderColor: "gray.500" }}
      _placeholder={{ color: "gray.500" }}
      tabIndex={2}
      marginBottom={2}
    />
  );
}

export default SearchInput;
