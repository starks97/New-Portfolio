"use client"; //Must be Client Components
import Image from "next/image";
import { GridItem, Text } from "@chakra-ui/react";

export default function ImageCard() {
  return (
    <>
      <GridItem
        w="100%"
        justifyContent={"center"}
        h="100%"
        sx={{
          "@media (max-width: 62em)": { display: "none" },
        }}
        backgroundImage={"url(/xample.jpg)"}
        backgroundSize={"cover"}
        backgroundPosition={"center, center"}
      ></GridItem>
    </>
  );
}
