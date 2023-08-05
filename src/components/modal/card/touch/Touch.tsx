"use client";
import { LayoutComponent, LineSeparator } from "@/themes";
import { Flex, Icon, GridItem, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
import { ITouchProps } from "../../interfaces";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import TouchInfoLabel from "./TouchInfoLabel";
import TouchForm from "./TouchForm";

export default function Touch({
  activeIndex,
  email,
  phone,
  info: { icons, path },
}: ITouchProps) {
  return (
    <>
      {activeIndex === 4 && (
        <Flex flexDirection="column" alignItems="center">
          <LineSeparator icon={MdEmail} />
          <LayoutComponent variant="touchLayout">
            <GridItem
              bg="#111"
              width="full"
              h="full"
              display={"flex"}
              gap={"inherit"}
              flexDirection={"column"}
              alignItems={"start"}
              p={"1rem"}
            >
              <TouchInfoLabel
                href="tel:631-903-3732"
                icon={BsFillTelephoneFill}
                label="TELEPHONE"
                value={phone}
              />
              <TouchInfoLabel
                href="mailto:ifrit68@hotmail.com"
                icon={AiOutlineMail}
                label="EMAIL"
                value={email}
              />
              <Box>
                <Text fontWeight={"extrabold"} color="orange">
                  SOCIAL MEDIA
                </Text>
                <Flex flexDirection={"row"} gap={"1rem"} marginTop={"1rem"}>
                  {icons.map((icon, index) => (
                    <Link
                      key={index}
                      href={path[index]}
                      passHref
                      target="_blank"
                    >
                      <Icon
                        as={icon}
                        color="#FFB25C"
                        w={5}
                        h={5}
                        bg="transparent"
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          outline: "none",
                        }}
                        _hover={{
                          opacity: 0.5,
                        }}
                      />
                    </Link>
                  ))}
                </Flex>
              </Box>
            </GridItem>
            <GridItem display={"flex"} w="100%">
              <TouchForm />
            </GridItem>
          </LayoutComponent>
        </Flex>
      )}
    </>
  );
}
