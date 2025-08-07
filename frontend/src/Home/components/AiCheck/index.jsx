import React from "react";
import { Checkbox, Tooltip } from "@chakra-ui/react";

function AiCheck({ handleChange, val }) {
  return (
    <Checkbox
      onChange={handleChange}
      colorScheme="purple"
      value={val}
      color="gray.600"
      borderColor="gray.300"
    >
      <Tooltip
        hasArrow
        label="To hide AI overview on the results page"
        placement="left"
        offset={[0, 40]}
        color="gray.600"
      >
        Hide AI overview
      </Tooltip>
    </Checkbox>
  );
}

export default AiCheck;
