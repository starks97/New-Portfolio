import { Box, Flex } from "@chakra-ui/react";
import React from "react";

import Image from "next/image";
import { urlFor } from "../../../../sanity";
import { MainImage } from "../interfaces";

type IProps = {
  src: MainImage | any;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
};

export default function ImageRender({ ...props }: IProps) {
  return (
    <Box>
      <Image
        src={urlFor(props.src).url()}
        alt="content-image"
        sizes="100%"
        style={{
          borderRadius: "0.5rem",
          width: "500px",
          height: "400px",
        }}
        width={props.width}
        height={props.height}
      />
    </Box>
  );
}

export const PortableImageRenderComponent = {
  types: {
    image: ({ value }: { value: any }) => (
      <Flex justifyContent="center" m="1rem">
        <Image
          src={urlFor(value).url()}
          alt="content-image"
          sizes="100%"
          style={{
            borderRadius: "0.5rem",
            width: "500px",
            height: "400px",
          }}
          width={500}
          height={300}
        />
      </Flex>
    ),
  },
};
