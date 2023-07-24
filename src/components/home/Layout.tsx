"use client"; //Must be Client Components

import { Box, useDisclosure, Modal } from "@chakra-ui/react";
import React, { useState } from "react";

import { data } from "../../data";
import { LayoutComponent } from "../../themes";
import { ImageCard, HomeCard } from "./card";
import { ModalComponent } from "../modal";
import { useIndex } from "../../state";

export default function HomeLayout() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const { isOpen, onClose, onOpen } = useDisclosure();

  //const indexs = useIndex((state) => state.index);

  const handdleToggle = (index: number) => {
    setActiveIndex(index);
    onOpen();
  };

  return (
    <>
      <Box height="100vh" padding="2rem" width="100%">
        <LayoutComponent>
          <ImageCard />
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
                  <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    size={"6xl"}
                    key={item.index}
                  >
                    <ModalComponent title={item.title}>
                      {item!.info?.phone}
                    </ModalComponent>
                  </Modal>
                )}
              </React.Fragment>
            ))}
          </LayoutComponent>
        </LayoutComponent>
      </Box>
    </>
  );
}
