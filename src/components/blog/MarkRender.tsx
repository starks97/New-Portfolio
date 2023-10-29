import React from "react";
import { Box, Heading, Text, List, ListItem } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

export interface MarkRenderProps {
  content: string;
}

export default function MarkdownRender({ content }: MarkRenderProps) {
  return (
    <Box>
      <ReactMarkdown
        components={{
          body: ({ children }) => <Text fontSize="lg">{children}</Text>,
          h1: ({ children }) => (
            <Heading as="h1" fontSize="4xl">
              {children}
            </Heading>
          ),
          h2: ({ children }) => (
            <Heading as="h2" fontSize="3xl">
              {children}
            </Heading>
          ),
          h3: ({ children }) => (
            <Heading as="h3" fontSize="2xl">
              {children}
            </Heading>
          ),
          h4: ({ children }) => (
            <Heading as="h4" fontSize="xl">
              {children}
            </Heading>
          ),
          img: ({ src, alt }) => (
            <img src={src} alt={alt} style={{ maxWidth: "100%" }} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
}
