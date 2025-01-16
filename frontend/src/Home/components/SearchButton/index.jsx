import React from "react";
import { Button } from "@chakra-ui/react";
function SearchButton({ isDisabled }) {
  return (
    <Button
      variant="solid"
      colorScheme="purple"
      size="lg"
      px={16}
      type="submit"
      rounded="full"
      isDisabled={isDisabled}
      _disabled={{ background: "purple.500" }}
    >
      Search
    </Button>
  );
}

export default SearchButton;
