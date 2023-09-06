import Head from "next/head";

interface ISeoProps {
  title: string;
  description: string;
  url: string;
  keywords: string[];
  isIndex?: boolean;
  image: string;
}

export default function CustomSeoComponent({ ...props }: ISeoProps) {
  return (
    <Head>
      <title>{`${props.title}`}</title>
      {props.title && (
        <>
          <meta name="title" content={`${props.title}`} />
          <meta property="og:title" content={props.title} />
        </>
      )}
      {props.description && (
        <>
          <meta name="description" content={props.description} />
          <meta property="og:description" content={props.description} />
        </>
      )}

      <meta name="keywords" content={props.keywords.join(", ")} />

      {props.url && (
        <>
          <meta name="url" content={props.url} />
          <meta name="og:url" content={props.url} />
        </>
      )}

      {props.image && (
        <>
          <meta name="image" content={props.image} />
          <meta property="og:image" content={props.image} />
        </>
      )}

      {props.isIndex === true ? (
        <>
          <meta name="robots" content="index, follow" />
        </>
      ) : (
        <>
          <meta name="robots" content="noindex, nofollow" />
        </>
      )}
    </Head>
  );
}
