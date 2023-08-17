"use client"; //Must be Client Components

import { Box, Text, GridItem, Flex, Button, Icon } from "@chakra-ui/react";
import { CustomButtonComponent, LayoutComponent } from "@/themes";
import { IPortfolioCardProps } from "../../interfaces";

import {
  BsPerson,
  BsFillCalendarFill,
  BsFillCalendarCheckFill,
} from "react-icons/bs";

import Image from "next/image";
import ProjectInfo from "./ProjectInfo";

import Link from "next/link";
export default function PortfolioCard({ ...props }: IPortfolioCardProps) {
  return (
    <LayoutComponent variant="PortfolioLayout">
      <GridItem w="100%" h="100%" display="flex" justifyContent="center">
        <Image
          src={props.image}
          width={500}
          height={500}
          alt="portfolio_image"
        />
      </GridItem>
      <GridItem
        display="flex"
        flexDirection={"column"}
        w="100%"
        sx={{ padding: { base: "4rem", md: "none" } }}
      >
        <Box>
          <Text
            fontFamily={"Lato, serif, Calibri, Arial"}
            fontWeight="extrabold"
            fontSize="1.7rem"
            textTransform={"uppercase"}
          >
            {props.title}
          </Text>
        </Box>
        <ProjectInfo icon={BsPerson} label="Client: " value={props.client} />
        <ProjectInfo
          icon={BsFillCalendarFill}
          label="Start Date: "
          value={props.startDate}
        />
        <ProjectInfo
          icon={BsFillCalendarCheckFill}
          label="End Date: "
          value={props.endDate}
        />

        <ProjectInfo icon={BsPerson} label="Technologies: ">
          {props.iconUsedTechnologies.map((icon, index) => (
            <Icon
              as={icon}
              key={index}
              marginRight="1rem"
              color="white!important"
            />
          ))}
        </ProjectInfo>

        <Flex
          borderBottom="1px solid #666"
          sx={{ width: { base: "100%", md: "90%" } }}
          marginTop="1.5rem"
        />

        <Flex
          marginTop="1.5rem"
          w="full"
          sx={{ justifyContent: { md: "center", lg: "flex-start" } }}
        >
          <CustomButtonComponent
            variant="AboutButton"
            sx={{ width: { base: "100%", md: "50%" } }}
          >
            <Link href={""} passHref target="_blank">
              View More
            </Link>
          </CustomButtonComponent>
        </Flex>
      </GridItem>
    </LayoutComponent>
  );
}
