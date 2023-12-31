"use client"; //Must be Client Components

import { Box, Text, GridItem, Flex, Button, Icon } from "@chakra-ui/react";
import { CustomButtonComponent, LayoutComponent } from "../../../../themes";
import { IPortfolioCardProps } from "../../interfaces";

import {
  BsPerson,
  BsFillCalendarFill,
  BsFillCalendarCheckFill,
  BsFillGearFill,
} from "react-icons/bs";

import Image from "next/image";
import ProjectInfo from "./ProjectInfo";

import Link from "next/link";
export default function PortfolioCard({ ...props }: IPortfolioCardProps) {
  return (
    <LayoutComponent variant="PortfolioLayout">
      <GridItem
        sx={{
          width: { base: "100%", md: "100%" },
          height: { base: "100%", md: "50%" },
        }}
        display="flex"
        justifyContent="center"
        p={6}
      >
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
        sx={{ padding: { base: "2rem", md: "none" } }}
      >
        <Box>
          <Text
            fontFamily={"Lato, serif, Calibri, Arial"}
            fontWeight="extrabold"
            fontSize="1.7rem"
            textTransform={"uppercase"}
            color="#0ea5ea"
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

        <ProjectInfo icon={BsFillGearFill} label="Technologies: ">
          {props.iconUsedTechnologies.map((icon, index) => (
            <Icon as={icon} key={index} marginRight="1rem" color="#b9e0f2" />
          ))}
        </ProjectInfo>

        <Flex
          borderBottom="1px solid #666"
          sx={{ width: { base: "100%", md: "100%", lg: "90%" } }}
          marginTop="1.5rem"
        />

        <Flex
          marginTop="1.5rem"
          w="full"
          sx={{ justifyContent: { md: "center", lg: "flex-start" } }}
        >
          <CustomButtonComponent
            variant="FormButton"
            sx={{ width: { base: "100%", md: "50%" } }}
          >
            <Link href={props.url} passHref target="_blank">
              View More
            </Link>
          </CustomButtonComponent>
        </Flex>
      </GridItem>
    </LayoutComponent>
  );
}
