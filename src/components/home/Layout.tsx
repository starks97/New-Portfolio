"use client"; //Must be Client Components

import { Box, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { data } from "../../data";
import { CustomTextComponent, LayoutComponent } from "../../themes";
import { ImageCard, HomeCard, TypeWritter } from "./card";
import { ModalComponent } from "../modal";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function HomeLayout() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [isFadeOpen, setIsFadeOpen] = useState<boolean>(false);

  const [activeProjectCard, setActiveProjectCard] = useState<number>(0);

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handdleToggle = (index: number) => {
    setActiveIndex(index);

    onOpen();
    setIsFadeOpen(false);
    return;
  };

  const handleProjectClick = (index: number) => {
    setIsFadeOpen(!isFadeOpen);
    setActiveProjectCard(index);
    return;
  };

  useEffect(() => {
    // Scroll to the specified hash fragment on page load
    if (window.location.hash) {
      const modalIndex = Number(window.location.hash.replace("about", ""));
      console.log(modalIndex);
      if (!isNaN(modalIndex)) {
        // Call your existing function to open the modal
        handdleToggle(modalIndex);
      }
    }
  }, []);

  return (
    <>
      <Box height="100vh" padding="2rem" width="100%">
        <LayoutComponent>
          <ImageCard
            imagePath="url(/xample.jpg)"
            sx={{
              "@media (max-width: 62em)": { display: "none" },
            }}
          />
          <LayoutComponent variant="cardLayout">
            {data.map((item) => (
              <React.Fragment key={item.index}>
                <HomeCard
                  bg={item.index !== 1 ? "#131c31" : ""}
                  cursor={item.index === 1 ? "default" : "pointer"}
                  onClick={
                    item.index !== 1
                      ? () => handdleToggle(item.index)
                      : () => {
                          return;
                        }
                  }
                  title={item.title}
                  boxShadow={item.index !== 1 ? "dark-md" : ""}
                  rounded={item.index !== 1 ? "xl" : ""}
                >
                  {item.index === 1 && (
                    <>
                      <CustomTextComponent
                        variant="profile"
                        fontSize="30px"
                        color="#b9e0f2"
                      >
                        {item.subtitle}
                      </CustomTextComponent>
                      <TypeWritter
                        texts={
                          item.description
                            ? item.description.map((item) => item)
                            : []
                        }
                      />
                    </>
                  )}
                </HomeCard>

                {activeIndex === item.index && (
                  <ModalComponent
                    title={item.title}
                    isOpen={isOpen}
                    onClose={onClose}
                    activeIndex={activeIndex}
                    description={item.personalInfo?.description!}
                    isFadeOpen={isFadeOpen}
                    setIsFadeOpen={setIsFadeOpen}
                    info={{
                      icons: [BsInstagram, BsGithub, BsLinkedin],
                      path: item.info?.socialMedia
                        ? item.info.socialMedia.map((element) => element.path)
                        : [],
                    }}
                    email={item.info?.email ? item.info?.email : ""}
                    phone={item.info?.phone ? item.info?.phone : ""}
                    dataPortfolio={
                      item.work
                        ? item.work?.map((element) => ({
                            title: element.title,
                            image: element.imagePreview,
                            client: element.client,
                            endDate: element.endDate,
                            startDate: element.startDate,
                            iconUsedTechnologies: element.iconUsedTechnologies,
                            index: element.index,
                          }))
                        : []
                    }
                    activeProjectCard={activeProjectCard}
                    setActiveProjectCard={setActiveProjectCard}
                    dataAbout={{
                      EDUCATION: item.personalInfo?.resume.EDUCATION
                        ? item.personalInfo?.resume.EDUCATION
                        : [],
                      EXPERIENCE: item.personalInfo?.resume.Experience
                        ? item.personalInfo?.resume.Experience
                        : [],
                    }}
                  >
                    {item.work?.map((element) => (
                      <React.Fragment key={element.index}>
                        <ImageCard
                          imagePath={`url(${element.imagePreview})`}
                          key={element.index}
                          minHeight={"20rem"}
                          onClick={() => handleProjectClick(element.index)}
                          sx={{
                            filter: { base: "none", md: "grayscale(100%)" },
                            "&:hover": {
                              base: "none",
                              md: {
                                filter: "grayscale(0%)",
                                "& .read-more": { opacity: 1 },
                              },
                            },
                            transition: { base: "none", md: "filter 0.2s" },
                          }}
                          as={"button"}
                        />
                      </React.Fragment>
                    ))}
                  </ModalComponent>
                )}
              </React.Fragment>
            ))}
          </LayoutComponent>
        </LayoutComponent>
      </Box>
    </>
  );
}
