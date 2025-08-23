import React from "react";
import { Checkbox, Tooltip, Text } from "@chakra-ui/react";

function Check({ handleChange, val, text, label, tabIndex }) {
  return (
    <Checkbox
      onChange={handleChange}
      colorScheme="purple"
      color="gray.600"
      borderColor="gray.300"
      isChecked={val}
      tabIndex={tabIndex}
    >
      <Tooltip
        hasArrow
        label={label}
        placement="left"
        offset={[0, 40]}
      >
        <Text color="gray.600">
          {text}
        </Text>
      </Tooltip>
    </Checkbox>
  );
}

export default Check;
