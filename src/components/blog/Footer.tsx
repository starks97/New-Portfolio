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
import { IconType } from "react-icons";

interface IFooterProps {
  phone: string;
  email: string;
  info: {
    icons: IconType[];
    path: string[];
  };
}
export default function Footer({ phone, email, info }: IFooterProps) {
  return (
    <Center
      sx={{
        justifyContent: { base: "center", md: "center", lg: "none" },
        m: { base: 4, md: 0, lg: 0 },
      }}
      boxShadow="2xl"
      rounded="3xl"
      border="1px solid #222f43"
      bg="#131c31"
      flexDir="column"
      alignItems="center"
    >
      <LayoutComponent variant="footerCard">
        <GridItemCustom variant="footer">
          <Box>
            <Text fontWeight="extrabold" fontSize="xl" color="#b9e0f2">
              Get in Touch
            </Text>
            <Flex borderBottom="3px solid #0ea5ea" width="30%" />
          </Box>
          <Box>
            <TouchInfoLabel
              href="tel:631-903-3732"
              icon={BsFillTelephoneFill}
              value={phone}
            />
            <TouchInfoLabel
              href="mailto:ifrit68@hotmail.com"
              icon={AiOutlineMail}
              value={email}
            />
          </Box>
        </GridItemCustom>
        <GridItemCustom variant="footer">
          <Box>
            <Text fontWeight="extrabold" fontSize="xl" color="#b9e0f2">
              Explore
            </Text>
            <Flex borderBottom="3px solid #0ea5ea" width="30%" />
          </Box>
          <Box>
            <List spacing={3}>
              <ListItem>
                <Link href="/#about">
                  <Text>About</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/#portfolio">
                  <Text>Portfolio</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/#touch">
                  <Text>Touch</Text>
                </Link>
              </ListItem>
            </List>
          </Box>
        </GridItemCustom>
        <GridItemCustom variant="footer">
          <Box>
            <Text fontWeight="extrabold" fontSize="xl" color="#b9e0f2">
              Recent Content
            </Text>
            <Flex borderBottom="3px solid #0ea5ea" width="30%" />
          </Box>
          <Box>
            <TouchInfoLabel
              href="tel:631-903-3732"
              icon={BsFillTelephoneFill}
              value={phone}
            />
            <TouchInfoLabel
              href="mailto:ifrit68@hotmail.com"
              icon={AiOutlineMail}
              value={email}
            />
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
          <Text color="#94a9c9">&copy; 2023 Created by </Text>
          <Text color="#0ea5ea">David Espinoza</Text>
        </Flex>
        <Flex gap={5}>
          {info.icons?.map((icon, index) => (
            <Box key={index}>
              <Link target="_blank" href={info?.path![index]} passHref>
                <CustomIconComponent as={icon} />
              </Link>
            </Box>
          ))}
        </Flex>
      </Stack>
    </Center>
  );
}
