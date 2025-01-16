import React from "react";
import { Checkbox, Tooltip } from "@chakra-ui/react";

function ExactCheck({ handleChange, val }) {
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
        label="For exact match of your search string"
        placement="left"
        offset={[0, 40]}
      >
        Exact
      </Tooltip>
    </Checkbox>
  );
}

export default ExactCheck;
