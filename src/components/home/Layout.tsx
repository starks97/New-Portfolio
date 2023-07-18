"use client"; //Must be Client Components

import { Box, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import data from "./data";
import { LayoutComponent } from "../../themes";

export default function HomeLayout() {
  return (
    <>
      <Box margin="2">
        <LayoutComponent>
          <GridItem w="full" justifyContent={"center"} h="full">
            <Text>Image</Text>
          </GridItem>
          <LayoutComponent variant="cardLayout">
            {data.map((item) => (
              <GridItem
                bg={item.index !== 1 ? "#222" : ""}
                w="full"
                h="full"
                key={item.index}
              >
                <Card key={item.index} title={item.title} />
              </GridItem>
            ))}
          </LayoutComponent>
        </LayoutComponent>
      </Box>
    </>
  );
}
