"use client";
import { Box, Text, Flex, List, ListItem } from "@chakra-ui/react";
import { TouchInfoLabel } from "../modal/card/touch";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GridItemCustom, LayoutComponent } from "@/themes";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

interface IFooterProps {
  phone: string;
  email: string;
}
export default function Footer({ phone, email }: IFooterProps) {
  return (
    <Flex sx={{ justifyContent: { base: "center", md: "center", lg: "none" } }}>
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
                <Link href="/">
                  <Text>About</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <Text>Portfolio</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={`/${"#about"}`}>
                  <Text>touch</Text>
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
    </Flex>
  );
}

//<Flex borderBottom="1px solid #66768f" width="100%" mt={4} />
