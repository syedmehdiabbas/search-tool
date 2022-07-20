import React from "react";
import {
  Box,
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
  <ButtonGroup
    size="md"
    colorScheme="purple"
    variant="outline"
    display="flex"
    flexWrap="wrap"
    gap={1}
    justifyContent="center"
  >
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
  </ButtonGroup>
);

function Websites({ handleWebsiteClick }) {
  const websitesData = useStore((state) => state.websites);
  const allWebsites = Object.keys(websitesData);
  return (
    <VStack spacing={3}>
      <Text
        size="md"
        color="purple.900"
        align="center"
        _selection={{ background: "purple.100" }}
      >
        Select to get results from specific websites only
      </Text>
      <Box>
        {allWebsites.length !== 0 ? (
          <WebsitesList
            websites={allWebsites}
            handleWebsiteClick={handleWebsiteClick}
            websitesData={websitesData}
          />
        ) : (
          <Text color="purple.900" _selection={{ background: "purple.100" }}>
            Add a website
          </Text>
        )}
      </Box>

      <HStack wrap="nowrap" gap={2} justify="center">
        <AddWebsite />
        <DeleteWebsite />
      </HStack>
    </VStack>
  );
}

export default Websites;
