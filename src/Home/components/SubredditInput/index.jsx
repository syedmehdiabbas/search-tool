import React from "react";
import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";

function SubredditInput({ value, setName, autoFocus }) {
  return (
    <InputGroup size="sm">
      <InputLeftAddon color="gray.600" children="r/" roundedLeft="full" />
      <Input
        placeholder="subreddit"
        variant="filled"
        border="2px"
        focusBorderColor="purple.300"
        roundedRight="full"
        w="200px"
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </InputGroup>
  );
}

export default SubredditInput;
