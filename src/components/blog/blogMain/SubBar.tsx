import { Avatar, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { urlFor } from "../../../../sanity";
import { User } from "../../../api/user";

interface ISubarProps {
  name: string;
  lastName: string;
  creatAt: string;
  hrefShare: string;
  image: User["image"];
}

export default function SubBar({ ...props }: ISubarProps) {
  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(2, 1fr)",
      }}
      gap="2rem"
    >
      <GridItem display="flex" gap="1rem">
        <Avatar src={urlFor(props.image).url()} name="postImage" size="md" />
        <Stack direction={"column"} alignItems={"flex-start"} gap={-1}>
          <Text
            color="#94a9c9"
            fontFamily={"Roboto Serif"}
            fontWeight={700}
            textTransform={"capitalize"}
          >
            {props.name} {""} {props.lastName}
          </Text>
          <Text fontFamily={"Roboto Serif"}>{props.creatAt}</Text>
        </Stack>
      </GridItem>

      <GridItem
        gap={5}
        alignItems="center"
        display={"flex"}
        sx={{
          justifyContent: { base: "none", md: "flex-end" },
          borderLeft: { base: "1px solid white", md: "none" },
        }}
        p="1rem"
      >
        <Text
          fontFamily={"Roboto Mono"}
          color="#94a9c9"
          fontWeight={700}
          fontSize={"xl"}
        >
          Share
        </Text>
        <LinkedinShareButton url={props.hrefShare}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <FacebookShareButton url={props.hrefShare}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <WhatsappShareButton url={props.hrefShare}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </GridItem>
    </Grid>
  );
}
