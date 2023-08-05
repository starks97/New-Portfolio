"use client"; //Must be Client Components

import { Box, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

import { data } from "../../data";
import { LayoutComponent } from "../../themes";
import { ImageCard, HomeCard } from "./card";
import { ModalComponent } from "../modal";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function HomeLayout() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isFadeOpen, setIsFadeOpen] = useState<boolean>(false);

  //state form

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handdleToggle = (index: number) => {
    setActiveIndex(index);
    onOpen();
  };

  return (
    <>
      <Box height="100vh" padding="2rem" width="100%">
        <LayoutComponent>
          <ImageCard
            imagePath="url(/xample.jpg)"
            sx={{ "@media (max-width: 62em)": { display: "none" } }}
          />
          <LayoutComponent variant="cardLayout">
            {data.map((item) => (
              <React.Fragment key={item.index}>
                <HomeCard
                  bg={item.index !== 1 ? "#222" : ""}
                  cursor={item.index === 1 ? "default" : "pointer"}
                  onClick={
                    item.index !== 1
                      ? () => handdleToggle(item.index)
                      : () => {
                          return;
                        }
                  }
                >
                  {item.title}
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
                  >
                    {item.work?.map((element) => (
                      <React.Fragment key={element.index}>
                        <ImageCard
                          imagePath={`url(${element.imagePreview})`}
                          key={element.index}
                          minHeight={"20rem"}
                          onClick={() => setIsFadeOpen(!isFadeOpen)}
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
