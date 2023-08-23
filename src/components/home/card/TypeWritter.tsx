"use client"; //Must be Client Components

import Typewriter from "typewriter-effect";

interface ITypeWritterProps {
  texts: string[];
}
export default function TypeWritter({ texts }: ITypeWritterProps) {
  return (
    <span
      style={{
        fontSize: "20px",
        textTransform: "uppercase",
        color: "white",
        marginTop: "-1px",
        zIndex: 1,
        overflow: "auto",
      }}
    >
      <Typewriter
        options={{
          strings: texts,
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
}
