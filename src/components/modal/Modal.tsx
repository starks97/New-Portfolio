"use client"; //Must be Client Components
import {
  Flex,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Modal,
} from "@chakra-ui/react";
import { About } from "./card/about";
import { Portfolio, Touch } from "./card";
import React from "react";

import { IModalProps } from "./interfaces";

export default function ModalComponent({ ...props }: IModalProps) {
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={"6xl"}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent bg="#222" alignItems={"center"}>
          <ModalHeader>
            <Flex justifyContent="center" alignItems="center">
              <Text
                fontFamily={"Lato, sans-serif, serif"}
                fontSize={"50px"}
                textTransform={"uppercase"}
                fontWeight={900}
                color={"white"}
              >
                {props.title}
              </Text>
            </Flex>
          </ModalHeader>
          <ModalBody maxW={"100%"} w="100%">
            <About
              activeIndex={props.activeIndex}
              description={props.description}
            />
            <Portfolio
              activeIndex={props.activeIndex}
              isFadeOpen={props.isFadeOpen}
              setIsFadeOpen={props.setIsFadeOpen}
            >
              {props.children}
            </Portfolio>
            <Touch
              activeIndex={props.activeIndex}
              email={props.email}
              phone={props.phone}
              info={{
                icons: props.info.icons,
                path: props.info.path,
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
