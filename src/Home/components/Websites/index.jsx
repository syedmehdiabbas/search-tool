import React from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import AddWebsite from "./AddWebsite";
import useStore from "../../../store";
import DeleteWebsite from "./DeleteWebsite";

const WebsitesList = ({ websites, handleWebsiteClick, websitesData }) => (
  <>
    {websites.map((website) => (
      <Button
        maxW="18ch"
        noOfLines={1}
        onClick={handleWebsiteClick}
        key={website}
        isActive={websitesData[website].selected}
        name={website}
        rounded="full"
      >
        {websitesData[website].name}
      </Button>
    ))}
  </>
);

function Websites({ handleWebsiteClick }) {
  const websitesData = useStore((state) => state.websites);
  const allWebsites = Object.keys(websitesData);
  return (
    <VStack spacing={5}>
      <Text
        size="md"
        color="purple.900"
        _selection={{ background: "purple.100" }}
      >
        Select to get results from specific websites only
      </Text>
      <ButtonGroup size="md" colorScheme="purple" variant="outline">
        <Flex flexWrap="wrap" gap={3} justify="center">
          <HStack>
            {allWebsites.length !== 0 ? (
              <WebsitesList
                websites={allWebsites}
                handleWebsiteClick={handleWebsiteClick}
                websitesData={websitesData}
              />
            ) : (
              <Text
                color="purple.900"
                _selection={{ background: "purple.100" }}
              >
                Add a website
              </Text>
            )}
            <AddWebsite />
            <DeleteWebsite />
          </HStack>
        </Flex>
      </ButtonGroup>
    </VStack>
  );
}

export default Websites;
