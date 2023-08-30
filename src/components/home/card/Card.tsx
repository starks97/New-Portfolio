"use client"; //Must be Client Components

import { Flex } from "@chakra-ui/react";

import { ICardProps } from "../interfaces";
import { CustomTextComponent, GridItemCustom } from "../../../themes";

export default function HomeCard({ ...props }: ICardProps) {
  return (
    <>
      <GridItemCustom
        bg={props.bg}
        cursor={props.cursor}
        onClick={props.onClick}
        variant="profile"
        boxShadow={props.boxShadow}
        rounded={props.rounded}
        _hover={props._hover}
        role={props.role}
      >
        <CustomTextComponent
          variant="profile"
          fontSize="25px"
          color="#0ea5ea"
          _groupHover={{ color: "#b9e0f2" }}
        >
          {props.title}
        </CustomTextComponent>

        <Flex
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          overflow="auto"
        >
          {props.children}
        </Flex>
      </GridItemCustom>
    </>
  );
}
