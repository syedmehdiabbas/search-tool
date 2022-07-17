import React, { useState } from "react";
import {
  Button,
  IconButton,
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
import useStore from "./../../../../store";
import Icon from "./../../../../components/Icon";
import plus from "./../../../../assets/plus.svg";

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

  const PlusIcon = () => <Icon src={plus} alt="Add" />;

  return (
    <>
      <IconButton
        onClick={onOpen}
        icon={<PlusIcon />}
        rounded="full"
        variant="ghost"
      ></IconButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="300px" borderLeft="8px" borderColor="purple.400">
          <ModalHeader color="purple.900">Add Website</ModalHeader>
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
                rounded="full"
              />
              <InputGroup>
                <InputLeftAddon children="https://" rounded="full" />
                <Input
                  placeholder="example.com"
                  value={link}
                  focusBorderColor="purple.300"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  rounded="full"
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
              rounded="full"
            >
              Add
            </Button>
            <Button variant="ghost" onClick={onClose} rounded="full">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddWebsite;
