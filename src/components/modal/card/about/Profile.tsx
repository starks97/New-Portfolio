"use client";

import { Box, Text, Flex, Icon, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import { CustomButtonComponent } from "../../../../themes";

import { BsCloudDownloadFill } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import { BsFillPersonFill } from "react-icons/bs";

interface IAboutProps {
  description: string;
}

export default function Profile({ description }: IAboutProps) {
  return (
    <>
      <GridItem
        w="full"
        sx={{ "@media (min-width: 62em)": { display: "none" } }}
        display="flex"
        justifyContent="center"
      >
        <Image src={"/xample.jpg"} alt="profile" width={500} height={500} />
      </GridItem>
      <GridItem w="100%" alignItems={"center"}>
        <Flex flexDirection="row" alignItems="center">
          <Icon
            as={BsFillPersonFill}
            w={5}
            h={5}
            margin={"1rem"}
            color="#0ea5ea"
          />
          <Text
            fontFamily={"Roboto Seri"}
            fontSize={"1.2rem"}
            textTransform={"uppercase"}
            fontWeight={700}
            color="#b9e0f2"
          >
            Info
          </Text>
        </Flex>
        <Box marginLeft="1rem" lineHeight={"8"}>
          <Text fontFamily={"Roboto Serif"} fontSize={"1rem"}>
            {description}
          </Text>
        </Box>
        <Flex
          w="full"
          mt="2rem"
          alignItems="center"
          sx={{
            flexDirection: { base: "column", md: "row", lg: "row" },
            gap: { base: 3, md: 7 },
            justifyContent: { base: "center", md: "flex-start" },
            marginLeft: { base: "0", md: "1rem" },
          }}
        >
          <Box w={{ base: "full", md: "full", lg: "25%" }}>
            <Link href="/files/resume.pdf" download>
              <CustomButtonComponent
                variant="FormButton"
                rightIcon={<BsCloudDownloadFill />}
              >
                My Resume
              </CustomButtonComponent>
            </Link>
          </Box>

          <Box w={{ base: "full", md: "full", lg: "25%" }}>
            <Link href={"/blog"} passHref>
              <CustomButtonComponent
                variant="FormButton"
                rightIcon={<ImBlog />}
              >
                My Blog
              </CustomButtonComponent>
            </Link>
          </Box>
        </Flex>
      </GridItem>
    </>
  );
}
