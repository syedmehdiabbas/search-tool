import React from "react";
import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";

function SubredditInput({ value, setName, autoFocus }) {
  return (
    <InputGroup size="sm" borderColor="gray.400">
      <InputLeftAddon color="gray.600" children="r/" roundedLeft="full" />
      <Input
        placeholder="subreddit"
        variant="outline"
        border="1px"
        focusBorderColor="purple.300"
        roundedRight="full"
        w="200px"
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => {
          setName(e.target.value);
        }}
        _hover={{ borderColor: "gray.500" }}
        _placeholder={{ color: "gray.500" }}
      />
    </InputGroup>
  );
}

export default SubredditInput;
