import { Box, Container, Flex, Text } from "@chakra-ui/react";

import Link from "next/link";

import { CommingSoonBackgroundAnimation } from "../animation";

import { CustomButtonComponent } from "@/themes";

export default function MainHero() {
  return (
    <Container h="100vh" w="100%" px="2rem">
      <Flex
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        flexDirection={"column"}
        ml="4rem"
      >
        <Text
          sx={{ fontSize: { base: "3rem", md: "3rem", lg: "4rem" } }}
          fontFamily={"Lato, serif, Calibri, Arial"}
          w="100%"
          fontWeight={900}
          color="#91B6FA"
        >
          Something New Its Comming!
        </Text>
        <Flex marginTop={"1rem"} w="100%" justifyContent={"center"}>
          <Link href="/" passHref>
            <CustomButtonComponent
              variant="FormButton"
              sx={{ width: { base: "100%", md: "100%", lg: "100%" } }}
            >
              Home
            </CustomButtonComponent>
          </Link>
        </Flex>
      </Flex>

      <Box
        w="500px"
        h="500px"
        zIndex="-1"
        position="absolute"
        top="calc(50% - 250px)"
        bottom="0px"
      >
        <CommingSoonBackgroundAnimation />
      </Box>
    </Container>
  );
}
