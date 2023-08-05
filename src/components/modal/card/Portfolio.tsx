"use client"; //Must be Client Components

import { LayoutComponent, LineSeparator, WrapperComponent } from "@/themes";
import { Box, Text, Flex, Icon, Button } from "@chakra-ui/react";

import { BsFillBriefcaseFill } from "react-icons/bs";
import { IPortfolioProps } from "../interfaces";

export default function Portfolio({
  activeIndex,
  children,
  isFadeOpen,
  setIsFadeOpen,
}: IPortfolioProps) {
  return (
    <>
      {activeIndex === 3 && (
        <>
          <Flex flexDirection="column" alignItems="center">
            <LineSeparator icon={BsFillBriefcaseFill} />
            <LayoutComponent variant="AboutLayout">{children}</LayoutComponent>
          </Flex>

          {isFadeOpen === true && (
            <Box
              position="absolute"
              bottom={0}
              left={0}
              width="100%"
              height="100%"
              bg="#222"
              transform={`translateY(${isFadeOpen ? "0" : "100%"})`}
              transition="transform 0.10s ease-in-out"
              zIndex={isFadeOpen ? 10 : -1}
            >
              <Button onClick={() => setIsFadeOpen!(!isFadeOpen)}>Close</Button>
            </Box>
          )}
        </>
      )}
    </>
  );
}
