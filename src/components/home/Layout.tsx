import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
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
