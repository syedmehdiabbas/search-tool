import React, { useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import useStore from "../../../store";

function AddWebsite() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const addWebsite = useStore((state) => state.addWebsite);

  const resetData = () => {
    setName("");
    setLink("");
  };

  const add = () => {
    if (!name || !link) return;
    addWebsite(name.toLowerCase(), link);
    onClose();
    resetData();
  };

  return (
    <>
      <Button fontWeight="bold" fontSize="xl" onClick={onOpen} variant="ghost">
        +
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          mt="300px"
          borderTopRadius="none"
          borderTop="8px"
          borderColor="purple.400"
        >
          <ModalHeader>Add Website</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Name"
                value={name}
                focusBorderColor="purple.300"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input
                  placeholder="example.com"
                  value={link}
                  focusBorderColor="purple.300"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />
              </InputGroup>
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              onClick={add}
              variant="solid"
              mr={4}
              isDisabled={!name || !link}
            >
              Add
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddWebsite;
