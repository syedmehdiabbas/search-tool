import React from "react";
import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import AddWebsite from "../AddWebsite";
import useStore from "../../../store";

function Websites({ handleWebsiteClick, handleWebsiteRightClick }) {
  const websitesData = useStore((state) => state.websites);
  const allWebsites = Object.keys(websitesData);
  return (
    <ButtonGroup size="md" colorScheme="purple" variant="outline">
      <Flex flexWrap="wrap" gap={3} justify="center">
        {allWebsites.map((website) => (
          <Button
            onClick={handleWebsiteClick}
            onContextMenu={handleWebsiteRightClick}
            key={website}
            isActive={websitesData[website].selected}
            name={website}
            rounded="full"
          >
            {websitesData[website].name}
          </Button>
        ))}
        <AddWebsite />
      </Flex>
    </ButtonGroup>
  );
}

export default Websites;
