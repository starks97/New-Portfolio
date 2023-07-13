import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>hello im page Blog</h1>;
      <div>
        <Link href="/">
          <button>About</button>
        </Link>
      </div>
    </>
  );
}
