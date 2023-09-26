"use client"; //Must be Client Components
import {
  Flex,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Modal,
  Text,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { About } from "./card/about";
import { Portfolio } from "./card/portfolio";
import { Touch } from "./card/touch";
import React from "react";

import { IModalProps } from "./interfaces";
import { AiOutlineClose } from "react-icons/ai";

export default function ModalComponent({ ...props }: IModalProps) {
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={{ base: "full", md: "6xl", lg: "6xl", xl: "6xl" }}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent bg="#050704" alignItems={"center"} rounded="xl" pb="2rem">
          <ModalHeader
            display="flex"
            alignItems="center"
            w="full"
            justifyContent="center"
          >
            <Flex w="full" justifyContent="center" marginLeft="2rem">
              <Text
                fontFamily="Lato, sans-serif, serif"
                sx={{ fontSize: { base: "30px", md: "50px" } }}
                textTransform="uppercase"
                fontWeight={900}
                color="#0ea5ea"
              >
                {props.title}
              </Text>
            </Flex>
            <Box>
              <IconButton
                icon={
                  <AiOutlineClose width="2rem" height="2rem" color="white" />
                }
                aria-label="close"
                bg="none"
                variant="none"
                onClick={() => props.onClose()}
                size={"lg"}
              >
                Close
              </IconButton>
            </Box>
          </ModalHeader>
          <ModalBody maxW={"100%"} w="100%">
            <About
              activeIndex={props.activeIndex}
              description={props.description}
              dataAbout={props?.dataAbout!}
              journey={props.journey}
            />

            <Portfolio
              activeIndex={props.activeIndex}
              isFadeOpen={props.isFadeOpen}
              setIsFadeOpen={props.setIsFadeOpen}
              dataPortfolio={props.dataPortfolio}
              activeProjectCard={props.activeProjectCard}
              setActiveProjectCard={props.setActiveProjectCard}
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
