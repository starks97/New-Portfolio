"use client"; //Must be Client Components
import {
  Flex,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { IModalProps } from "./interfaces";

export default function ModalComponent({ title, children }: IModalProps) {
  return (
    <>
      <ModalOverlay />
      <ModalContent bg="#222">
        <ModalHeader>
          <Flex justifyContent="center" alignItems="center">
            <Text
              fontFamily={"Lato, sans-serif, serif"}
              fontSize={"50px"}
              textTransform={"uppercase"}
              fontWeight={900}
              color={"white"}
            >
              {title}
            </Text>
          </Flex>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </>
  );
}
