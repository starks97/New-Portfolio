import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>hello im Home</h1>;
      <div>
        <Link href="/about">
          <button>About</button>
        </Link>
      </div>
    </>
  );
}
