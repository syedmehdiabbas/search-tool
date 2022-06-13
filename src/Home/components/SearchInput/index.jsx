import React from "react";
import { Input } from "@chakra-ui/react";

function SearchInput({ input, handleInput }) {
  return (
    <Input
      placeholder="Search"
      size="lg"
      variant="filled"
      border="2px"
      focusBorderColor="purple.300"
      value={input}
      onChange={handleInput}
      rounded="full"
      autoFocus
    />
  );
}

export default SearchInput;
