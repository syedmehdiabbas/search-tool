import React from "react";
import { Input } from "@chakra-ui/react";

function SearchInput({ input, handleInput }) {
  return (
    <Input
      placeholder="Search"
      size="lg"
      variant="outline"
      border="1px"
      borderColor="gray.500"
      focusBorderColor="purple.300"
      value={input}
      onChange={handleInput}
      rounded="full"
      autoFocus
      _hover={{ borderColor: "gray.500" }}
      _placeholder={{ color: "gray.500" }}
    />
  );
}

export default SearchInput;
