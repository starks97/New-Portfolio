"use client";
import {
  Flex,
  Box,
  Text,
  VStack,
  FormControl,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import emailjs from "@emailjs/browser";

import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import TouchFormControl from "./TouchFormControl";
import { CustomButtonComponent } from "../../../../themes";
import { ChangeEvent, useRef, useState } from "react";

export default function TouchForm() {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(form.current!);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setShowAlert(true);
      setIsMessageSent(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsMessageSent(false);
    }
  };
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
        <form ref={form} onSubmit={handleSendEmail}>
          <VStack spacing={5}>
            <TouchFormControl
              label="Name"
              icon={BsPerson!}
              value="form"
              name="name"
            />
            <TouchFormControl
              label="Email"
              icon={MdOutlineEmail!}
              value=""
              name="email"
            />
            <TouchFormControl label="Message" value="" name="message" />
            <FormControl
              id="name"
              display="flex"
              sx={{ justifyContent: { md: "center", lg: "flex-start" } }}
            >
              <CustomButtonComponent
                variant="FormButton"
                sx={{ width: { base: "100%", md: "50%" } }}
                type="submit"
              >
                Send Message
              </CustomButtonComponent>
            </FormControl>
          </VStack>
          {showAlert && (
            <Alert status="success">
              <AlertIcon />
              {isMessageSent ? "Message sent!" : "Message not sent!"}
            </Alert>
          )}
        </form>
      </Flex>
    </Box>
  );
}
