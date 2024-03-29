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

import ProjectInfo from "./ProjectInfo";

import Link from "next/link";
import SwiperProject from "./SwiperProject";
export default function PortfolioCard({ ...props }: IPortfolioCardProps) {
  return (
    <LayoutComponent variant="PortfolioLayout">
      <SwiperProject image={props.image} description={props.description} />

      <GridItem
        display="flex"
        flexDirection={"column"}
        w="100%"
        sx={{ padding: { base: "2rem", md: "none" } }}
      >
        <Box>
          <Text
            fontFamily={"Roboto Mono"}
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
          <Box w={{ base: "full", md: "full", lg: "full" }}>
            <Link href={props.url} passHref target="_blank">
              <CustomButtonComponent
                variant="FormButton"
                sx={{ width: { base: "100%", md: "50%" } }}
              >
                View More
              </CustomButtonComponent>
            </Link>
          </Box>
        </Flex>
      </GridItem>
    </LayoutComponent>
  );
}
