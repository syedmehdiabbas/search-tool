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
      mt={4}
      isDisabled={isDisabled}
    >
      Search
    </Button>
  );
}

export default SearchButton;
