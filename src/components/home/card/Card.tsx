"use client"; //Must be Client Components

import { Flex } from "@chakra-ui/react";

import { ICardProps } from "../interfaces";
import { CustomTextComponent, GridItemCustom } from "@/themes";

export default function HomeCard({
  bg,
  cursor,
  children,
  onClick,
  title,
}: ICardProps) {
  return (
    <>
      <GridItemCustom
        bg={bg}
        cursor={cursor}
        onClick={onClick}
        variant="profile"
      >
        <CustomTextComponent variant="profile" fontSize="25px">
          {title}
        </CustomTextComponent>

        <Flex
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          overflow="auto"
        >
          {children}
        </Flex>
      </GridItemCustom>
    </>
  );
}
