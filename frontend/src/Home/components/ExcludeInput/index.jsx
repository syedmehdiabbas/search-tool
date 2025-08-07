import React from "react";
import { Tooltip, Input } from "@chakra-ui/react";

function ExcludeInput({ excludeTerms, setExcludeTerms }) {
  return (
    <Tooltip
      hasArrow
      label="To exclude some terms or websites from the search results"
      placement="right"
      offset={[0, 15]}
    >
      <Input
        placeholder="Words to exclude"
        variant="outline"
        border="1px"
        borderColor="gray.400"
        focusBorderColor="purple.300"
        rounded="full"
        value={excludeTerms}
        onChange={(e) => {
          setExcludeTerms(e.target.value);
        }}
        size="md"
        _hover={{ borderColor: "gray.500" }}
        _placeholder={{ color: "gray.500" }}
      />
    </Tooltip>
  );
}

export default ExcludeInput;
