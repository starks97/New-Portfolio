"use client"; //Must be Client Components

import { LayoutComponent, LineSeparator } from "@/themes";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";

import { BsFillBriefcaseFill } from "react-icons/bs";
import { IPortfolioProps } from "../../interfaces";
import PortfolioCard from "./PortfolioCard";
import { useMemo } from "react";

import { motion } from "framer-motion";

export default function Portfolio({ ...props }: IPortfolioProps) {
  const activeProject = useMemo(() => {
    const projectData = props.dataPortfolio!.find((item) => {
      if (item.index !== props.activeProjectCard) {
        return null;
      }

      return item;
    });

    return projectData;
  }, [props.activeProjectCard]);

  return (
    <>
      <>
        {props.activeIndex === 3 && (
          <Flex flexDirection="column" alignItems="center">
            <LineSeparator icon={BsFillBriefcaseFill} />
            <LayoutComponent variant="AboutLayout">
              {props?.children}
            </LayoutComponent>
          </Flex>
        )}

        {props?.isFadeOpen === true && (
          <Box
            position="absolute"
            bottom={0}
            left={0}
            width="100%"
            height="100%"
            bg="#222"
            transform={`translateY(${props?.isFadeOpen ? "0" : "100%"})`}
            transition="transform 0.5s ease-in-out"
            zIndex={props?.isFadeOpen ? 10 : -1}
          >
            <Flex justifyContent="flex-end">
              <IconButton
                icon={
                  <AiOutlineClose width="2rem" height="2rem" color="white" />
                }
                aria-label="close"
                bg="none"
                variant="none"
                onClick={() => props?.setIsFadeOpen!(!props?.isFadeOpen)}
                size={"lg"}
              >
                Close
              </IconButton>
            </Flex>

            {activeProject && (
              <PortfolioCard
                title={activeProject.title}
                image={activeProject.image}
                client={activeProject.client}
                startDate={activeProject.startDate}
                endDate={activeProject.endDate}
                iconUsedTechnologies={activeProject.iconUsedTechnologies}
                index={activeProject.index}
              />
            )}
          </Box>
        )}
      </>
    </>
  );
}
