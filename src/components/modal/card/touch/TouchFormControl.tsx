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
        <FormLabel>{props.label}</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          {props.label === "Message" ? (
            <>
              <Textarea
                borderColor="gray.300"
                _hover={{
                  borderRadius: "gray.300",
                }}
                placeholder="message"
              />
            </>
          ) : (
            <>
              <InputLeftElement pointerEvents="none">
                {props.icon ? <props.icon color="orange" /> : null}
              </InputLeftElement>
              <Input type="text" size="md" />
            </>
          )}
        </InputGroup>
      </FormControl>
    </>
  );
}

//onChange={props.onChange}
//value={props.value}
