"use client"; //Must be Client Components

import { Box, Text, Flex, GridItem } from "@chakra-ui/react";
import { LayoutComponent } from "@/themes";
import { IPortfolioCardProps } from "../../interfaces";

export default function PortfolioCard({ ...props }: IPortfolioCardProps) {
  return (
    <LayoutComponent variant="formLayout">
      <GridItem>
        <Text>{props.title}</Text>
      </GridItem>
    </LayoutComponent>
  );
}
