"use client";
import {
  CustomIconComponent,
  GridItemCustom,
  LayoutComponent,
  LineSeparator,
} from "@/themes";
import { Flex, GridItem, Box, Text } from "@chakra-ui/react";
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
  id,
}: ITouchProps) {
  return (
    <>
      {activeIndex === 4 && (
        <Flex
          flexDirection="column"
          alignItems="center"
          marginBottom="0.5rem"
          id={id}
        >
          <LineSeparator icon={MdEmail} />
          <LayoutComponent variant="touchLayout">
            <GridItemCustom>
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
                      <CustomIconComponent as={icon} />
                    </Link>
                  ))}
                </Flex>
              </Box>
            </GridItemCustom>
            <GridItem display={"flex"} w="100%">
              <TouchForm />
            </GridItem>
          </LayoutComponent>
        </Flex>
      )}
    </>
  );
}
