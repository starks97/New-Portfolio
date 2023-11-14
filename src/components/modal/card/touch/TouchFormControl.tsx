"use client";

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";

import { IFormTouchProps } from "../../interfaces";

export default function TouchFormControl({ ...props }: IFormTouchProps) {
  return (
    <>
      <FormControl>
        <FormLabel color="#b9e0f2">{props.label}</FormLabel>
        <InputGroup borderColor="#0ea5ea" w="100%">
          {props.label === "Message" ? (
            <>
              <Textarea
                borderColor="#0ea5ea"
                _hover={{
                  borderColor: "white",
                }}
                placeholder="message"
              />
            </>
          ) : (
            <>
              <InputLeftElement pointerEvents="none">
                {props.icon ? <props.icon color="#b9e0f2" /> : null}
              </InputLeftElement>
              <Input type="text" size="md" name={props.name} />
            </>
          )}
        </InputGroup>
      </FormControl>
    </>
  );
}
