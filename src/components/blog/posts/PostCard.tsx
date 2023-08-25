"use client";
import { Badge, Box, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { IPostsCardsDesktopProps } from "../interfaces";
import Link from "next/link";
import { LayoutComponent } from "@/themes";
import SidePosts from "./SidePosts";

export default function PostsCard({ ...props }: IPostsCardsDesktopProps) {
  return (
    <LayoutComponent variant="postCard">
      <GridItem
        display="flex"
        gap="2rem"
        marginTop="2rem"
        flexDir={"column"}
        justifyContent={"center"}
        mb="4rem"
      >
        <Stack flexDir={"row"}>
          <Link href="/">
            <Box
              h="250px"
              bg="gray.100"
              mt={-6}
              mx={-6}
              mb={6}
              pos="relative"
              margin={1}
              borderRadius={9}
              onClick={() => console.log("teste")}
              w="270px"
              minW={"270px"}
              transition="transform 0.2s ease"
              _hover={{ transform: "scale(1.05)" }}
              sx={{
                width: { base: "180px", md: "200px", lg: "270px" },
                height: { base: "180px", md: "200px", lg: "250px" },
                minWidth: { base: "180px", md: "200px", lg: "270px" },
              }}
            >
              <Image src={props.images!} alt="postImage" fill />
            </Box>
          </Link>

          <Stack dir="column">
            <Box>
              <Badge borderRadius="0.30rem" color="#4BA9C5" bg="black">
                {props.category}
              </Badge>
            </Box>
            <Box>
              <Link href="">
                <Heading
                  color="#b9e0f2"
                  textTransform={"uppercase"}
                  fontWeight="extrabold"
                  fontSize="xl"
                  fontFamily="lato, sans-serif"
                  _hover={{ color: "#4BA9C5" }}
                  sx={{
                    fontSize: { md: "lg", lg: "xl" },
                  }}
                >
                  {props.title}
                </Heading>
              </Link>
            </Box>
            <Box>
              <Text
                color="#94a9c9"
                sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}
              >
                {props.description}
              </Text>
            </Box>
            <Stack mt={3} direction={"row"} spacing={4} align="center">
              <Text
                fontWeight={600}
                color="#66768f"
                fontFamily={"Noto Sans,sans-serif"}
                sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}
              >
                {props.author}
              </Text>
              <Text sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}>
                {props.publishDate}
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack flexDir={"row"}>
          <Link href="/">
            <Box
              h="250px"
              bg="gray.100"
              mt={-6}
              mx={-6}
              mb={6}
              pos="relative"
              margin={1}
              borderRadius={9}
              onClick={() => console.log("teste")}
              w="270px"
              minW={"270px"}
              transition="transform 0.2s ease"
              _hover={{ transform: "scale(1.05)" }}
              sx={{
                width: { base: "180px", md: "200px", lg: "270px" },
                height: { base: "180px", md: "200px", lg: "250px" },
                minWidth: { base: "180px", md: "200px", lg: "270px" },
              }}
            >
              <Image src={props.images!} alt="postImage" fill />
            </Box>
          </Link>

          <Stack dir="column">
            <Box>
              <Badge borderRadius="0.30rem" color="#4BA9C5" bg="black">
                {props.category}
              </Badge>
            </Box>
            <Box>
              <Link href="">
                <Heading
                  color="#b9e0f2"
                  textTransform={"uppercase"}
                  fontWeight="extrabold"
                  fontSize="xl"
                  fontFamily="lato, sans-serif"
                  _hover={{ color: "#4BA9C5" }}
                  sx={{
                    fontSize: { md: "lg", lg: "xl" },
                  }}
                >
                  {props.title}
                </Heading>
              </Link>
            </Box>
            <Box>
              <Text
                color="#94a9c9"
                sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}
              >
                {props.description}
              </Text>
            </Box>
            <Stack mt={3} direction={"row"} spacing={4} align="center">
              <Text
                fontWeight={600}
                color="#66768f"
                fontFamily={"Noto Sans,sans-serif"}
                sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}
              >
                {props.author}
              </Text>
              <Text sx={{ fontSize: { base: "xs", md: "sm", lg: "md" } }}>
                {props.publishDate}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </GridItem>

      <GridItem display="flex" w="full" mb="4rem">
        <SidePosts
          images={props.images}
          title={props.title}
          publishDate={props.publishDate}
        />
      </GridItem>
    </LayoutComponent>
  );
}
