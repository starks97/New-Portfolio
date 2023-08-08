"use client"; //Must be Client Components
import { GridItem, SystemStyleObject } from "@chakra-ui/react";

interface IProps {
  imagePath: string;
  sx?: SystemStyleObject | undefined;
  minHeight?: string;
  onClick?: () => void;
  as?: React.ElementType;
}

export default function ImageCard({
  imagePath,
  sx,
  minHeight,
  onClick,
  as,
}: IProps) {
  return (
    <>
      <GridItem
        w="100%"
        justifyContent={"center"}
        h="100%"
        sx={sx}
        minH={minHeight}
        backgroundImage={imagePath}
        backgroundSize={"cover"}
        backgroundPosition={"center, center"}
        as={as}
        onClick={onClick}
      />
    </>
  );
}
