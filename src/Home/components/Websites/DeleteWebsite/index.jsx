import {
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Icon from "../../../../components/Icon";
import trash from "./../../../../assets/trash.svg";
import useStore from "../../../../store";

const TrashIcon = () => <Icon src={trash} alt="Delete" />;

const DeleteWebsite = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const websitesData = useStore((state) => state.websites);
  const allWebsites = Object.keys(websitesData);
  const deleteWebsite = useStore((state) => state.deleteWebsite);

  return (
    <>
      <IconButton
        icon={<TrashIcon />}
        onClick={onOpen}
        rounded="full"
        variant="ghost"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="300px" borderLeft="8px" borderColor="purple.400">
          <ModalHeader color="purple.900">Delete a Website</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {allWebsites.map((website, index) => (
              <HStack
                key={website}
                p={2}
                justify="space-between"
                borderBottom="2px"
                borderTop={index === 0 ? "2px" : "none"}
                borderColor="gray.100"
              >
                <Text noOfLines={1} color="purple.900" fontWeight="medium">
                  {website}
                </Text>
                <IconButton
                  icon={<TrashIcon />}
                  onClick={() => deleteWebsite(website)}
                  rounded="full"
                  variant="ghost"
                />
              </HStack>
            ))}
          </ModalBody>
          <ModalFooter justifyContent="center"></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteWebsite;
