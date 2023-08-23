"use client"; //Must be Client Components
import { useDisclosure } from "@chakra-ui/react";
import { HomeLayout } from "../../components/home";
import React, { useEffect } from "react";

export default function Home() {
  return (
    <>
      <HomeLayout />
    </>
  );
}
