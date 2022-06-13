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
        placeholder="Exclude"
        variant="filled"
        border="2px"
        focusBorderColor="purple.300"
        rounded="full"
        value={excludeTerms}
        onChange={(e) => {
          setExcludeTerms(e.target.value);
        }}
        size="sm"
      />
    </Tooltip>
  );
}

export default ExcludeInput;
