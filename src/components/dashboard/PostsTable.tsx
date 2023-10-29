import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
  Text,
  Flex,
} from "@chakra-ui/react";
import { IBlogPostProps } from "../blog";
import React from "react";
import { DateConverter } from "@/utils";
import { CustomButtonComponent } from "@/themes";

export default function PostsTable({ posts }: { posts: IBlogPostProps[] }) {
  return (
    <Flex maxW="80%" mt="2rem" flexDirection={"column"}>
      <Text
        fontSize={"4xl"}
        fontFamily={"Lato, sans-serif, serif"}
        fontWeight={"extrabold"}
        color={"#0ea5ea"}
      >
        List of Posts
      </Text>
      <TableContainer
        border={"1px solid #222f43"}
        bg="#131c31"
        borderRadius={"1rem"}
      >
        <Table variant={"simple"}>
          <Tbody>
            {posts.map((post) => (
              <React.Fragment key={post.id}>
                <Tr>
                  <Td color="#0ea5ea">{post.title}</Td>
                  <Td color="#b9e0f2">
                    {DateConverter.formatDateFromString(post.createdAt)}
                  </Td>
                  <Td color="#b9e0f2">
                    {post.published === true ? "published" : "no published"}
                  </Td>
                  <Td>
                    <CustomButtonComponent variant="DashButton">
                      Update
                    </CustomButtonComponent>
                  </Td>
                  <Td>
                    <CustomButtonComponent variant="DashButton">
                      Delete
                    </CustomButtonComponent>
                  </Td>
                </Tr>
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
