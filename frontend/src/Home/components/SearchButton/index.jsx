import React from "react";
import { Button } from "@chakra-ui/react";
function SearchButton() {
  return (
    <Button
      variant="solid"
      colorScheme="purple"
      size="lg"
      px={16}
      type="submit"
      rounded="full"
      tabIndex={8}
      maxWidth="md"
      width="full"
    >
      Search
    </Button>
  );
}

export default SearchButton;
