"use client";
import {
  Flex,
  Icon,
  GridItem,
  Box,
  Text,
  Button,
  WrapItem,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
} from "@chakra-ui/react";

import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import TouchFormControl from "./TouchFormControl";
import { CustomButtonComponent } from "@/themes";

export default function TouchForm() {
  return (
    <Box width="100%">
      <Text
        fontFamily={"Lato, serif, Calibri, Arial"}
        fontWeight="extrabold"
        fontSize="1.3rem"
        color="#b9e0f2"
      >
        FEEL FREE TO DROP ME A LINE
      </Text>

      <Flex flexDirection={"column"} marginTop="0.5rem">
        <VStack spacing={5}>
          <TouchFormControl label="Name" icon={BsPerson!} value="" />
          <TouchFormControl label="Email" icon={MdOutlineEmail!} value="" />
          <TouchFormControl label="Message" value="" />
          <FormControl
            id="name"
            display="flex"
            sx={{ justifyContent: { md: "center", lg: "flex-start" } }}
          >
            <CustomButtonComponent
              variant="FormButton"
              sx={{ width: { base: "100%", md: "50%" } }}
            >
              Send Message
            </CustomButtonComponent>
          </FormControl>
        </VStack>
      </Flex>
    </Box>
  );
}
