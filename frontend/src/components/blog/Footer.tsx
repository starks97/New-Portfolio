"use client";
import {
  Box,
  Text,
  Flex,
  List,
  ListItem,
  Stack,
  Center,
} from "@chakra-ui/react";
import { TouchInfoLabel } from "../modal/card/touch";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  CustomIconComponent,
  GridItemCustom,
  LayoutComponent,
} from "../../themes";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

import { data } from "../../data";
import { Post } from "./interfaces";
import { menuItems } from "../navbar";
import React from "react";

interface IFooterProps {
  posts: Post[];
}
export default function Footer({ posts }: IFooterProps) {
  return (
    <Center
      boxShadow="2xl"
      rounded="3xl"
      border="1px solid #222f43"
      bg="#131c31"
      flexDir="column"
      alignItems="center"
    >
      <>
        <LayoutComponent variant="footerCard">
          <GridItemCustom variant="footer">
            <Box>
              <Text
                fontWeight="extrabold"
                fontSize="xl"
                color="#b9e0f2"
                fontFamily={"Roboto Mono"}
              >
                Get in Touch
              </Text>
              <Flex borderBottom="3px solid #0ea5ea" width="30%" />
            </Box>

            <Box>
              <TouchInfoLabel
                href="tel:631-903-3732"
                icon={BsFillTelephoneFill}
                value={data[3].info?.phone!}
              />
              <TouchInfoLabel
                href="mailto:ifrit68@hotmail.com"
                icon={AiOutlineMail}
                value={data[3].info?.email!}
              />
            </Box>
          </GridItemCustom>
          <GridItemCustom variant="footer">
            <Box>
              <Text
                fontWeight="extrabold"
                fontSize="xl"
                color="#b9e0f2"
                fontFamily={"Roboto Mono"}
              >
                Explore
              </Text>
              <Flex borderBottom="3px solid #0ea5ea" width="30%" />
            </Box>
            <Box>
              <List spacing={3}>
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.label === "Blog" ? null : (
                      <ListItem>
                        <Link href={item.path}>
                          <Text
                            fontFamily={"Roboto Serif"}
                            _hover={{ color: "#b9e0f2" }}
                            fontSize={"medium"}
                          >
                            {item.label}
                          </Text>
                        </Link>
                      </ListItem>
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </GridItemCustom>
          <GridItemCustom variant="footer">
            <Box>
              <Text
                fontWeight="extrabold"
                fontSize="xl"
                color="#b9e0f2"
                fontFamily={"Roboto Mono"}
              >
                Recent Content
              </Text>
              <Flex borderBottom="3px solid #0ea5ea" width="30%" />
            </Box>
            <Box>
              <List spacing={3}>
                {posts.slice(0, 3).map((post, index) => (
                  <ListItem key={index}>
                    <Link href={`/blog/${post.slug.current}`}>
                      <Text
                        fontFamily={"Roboto Serif"}
                        _hover={{ color: "#b9e0f2" }}
                        fontSize={"medium"}
                      >
                        {post.title}
                      </Text>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </GridItemCustom>
        </LayoutComponent>
        <Flex borderBottom="1px solid #66768f" width="80%" mt={4} mb={5} />
        <Stack
          w="80%"
          mb={5}
          sx={{
            flexDir: { base: "column", md: "row", lg: "row" },
            justifyContent: {
              base: "center",
              md: "space-between",
              lg: "space-between",
            },
          }}
          alignItems="center"
        >
          <Flex flexDir="row" gap={2}>
            <Text
              color="#94a9c9"
              fontFamily={"Roboto Serif"}
              fontSize={"large"}
            >
              &copy; 2023 Created by{" "}
            </Text>
            <Text
              color="#0ea5ea"
              fontFamily={"Roboto Serif"}
              fontSize={"large"}
            >
              David Espinoza
            </Text>
          </Flex>
          <Flex gap={5}>
            {data[3].info?.socialMedia.map((icon, index) => (
              <Box key={index}>
                <Link target="_blank" href={icon.path} passHref>
                  <CustomIconComponent as={icon.value} />
                </Link>
              </Box>
            ))}
          </Flex>
        </Stack>
      </>
    </Center>
  );
}
