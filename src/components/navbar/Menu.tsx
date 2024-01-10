"use client"; //Must be Client Components

import React from "react";

import {
  Flex,
  HStack,
  useDisclosure,
  Container,
  useUpdateEffect,
  GridItem,
  Grid,
  Fade,
} from "@chakra-ui/react";
import { ResponsiveBreakpoints, useResponsive } from "@/hooks";

import { HamburgerIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import Link from "next/link";
import {
  CustomBoxComponent,
  CustomButtonComponent,
  CustomIconButtonComponent,
} from "@/themes";
import { menuItems } from "./interfaces";
import MobileNav from "./MobileNav";

import { useRouter } from "next/router";

import Logo from "./Logo";

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useResponsive(ResponsiveBreakpoints.MD);

  const router = useRouter();

  useUpdateEffect(() => {
    document.body.style.overflowY = isMobile && isOpen ? "hidden" : "inherit";
  }, [isOpen, isMobile]);

  return (
    <Container bg="none" p={{ base: 6, md: 2 }} boxShadow="lg" maxW="100%">
      {isMobile ? (
        <>
          <Grid
            templateColumns="15% 70% 15%"
            insetX="0"
            zIndex={9}
            alignItems={"center"}
            justifyItems={"center"}
          >
            <GridItem
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <CustomIconButtonComponent
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                onClick={isOpen ? onClose : onOpen}
              />
            </GridItem>
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="/" passHref>
                <Logo color="white" height="100px" width="150px" />
              </Link>
            </GridItem>
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Link href="/files/resume.pdf" download>
                <CustomIconButtonComponent
                  variant={"resumeButton"}
                  icon={<DownloadIcon />}
                  ariaLabel="Download Resume"
                  boxSize={9}
                />
              </Link>
            </GridItem>
          </Grid>
          <Fade in={isOpen} unmountOnExit={true}>
            <CustomBoxComponent
              variant="MenuBox"
              sx={{
                ":global(body)": {
                  overflow: "hidden",
                },
              }}
              onClick={isOpen ? onClose : onOpen}
            >
              <MobileNav />
            </CustomBoxComponent>
          </Fade>
        </>
      ) : (
        <>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={20} alignItems={"center"} marginLeft={4}>
              <Link href="/" passHref>
                <Logo color="white" height="100px" width="150px" />
              </Link>
            </HStack>

            <HStack spacing={12} display={{ base: "none", md: "flex" }}>
              {menuItems.map((item) => (
                <React.Fragment key={item.label}>
                  {/*to hide the button blog */}
                  {item.label === "Blog" && router.route === "/blog" ? null : (
                    <Link href={item.path}>
                      <CustomButtonComponent variant="menuButtons">
                        {item.label}
                      </CustomButtonComponent>
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </HStack>
            <Flex marginRight="4">
              <Link href="/files/resume.pdf" target="_blank">
                <CustomButtonComponent variant="FormButton">
                  Resume
                </CustomButtonComponent>
              </Link>
            </Flex>
          </Flex>
          <Flex
            overflow={"inherit"}
            bg="none"
            justifyItems="center"
            alignItems="center"
            borderBottom="2px solid #66768f"
            width="100%"
            mt="0.5rem"
          />
        </>
      )}
    </Container>
  );
}
