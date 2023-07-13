import {
  Button,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Modal({}: ModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState<string>("md");

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          key={size}
          m={4}
        >{`Open ${size} Modal`}</Button>
      ))}

      <Modal
        onClose={onClose}
        size={size}
        isOpen={isOpen}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Modal body text goes here.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
