import Layout from "@/components/organism/layout";
import Hero from "@/components/organism/hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon Catalog</title>
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
