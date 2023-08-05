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
        {props.label === "Message" ? (
          <>
            <FormLabel>{props.label}</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <Textarea
                borderColor="gray.300"
                _hover={{
                  borderRadius: "gray.300",
                }}
                placeholder="message"
              />
            </InputGroup>
          </>
        ) : (
          <>
            <FormLabel>{props.label}</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement pointerEvents="none">
                {props.icon ? <props.icon color="orange" /> : null}
              </InputLeftElement>
              <Input
                type="text"
                size="md"
                onChange={props.onChange}
                value={props.value}
              />
            </InputGroup>
          </>
        )}
      </FormControl>
    </>
  );
}
