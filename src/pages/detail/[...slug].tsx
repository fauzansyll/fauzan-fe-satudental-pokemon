import Layout from "@/components/organism/layout";
import Detail from "@/components/pages/pokemondetail";
import Head from "next/head";
import React, { Fragment } from "react";

const DetailPage = () => {
  return (
    <>
      <Head>
        <title>Pokemon Detail</title>
      </Head>
      <Layout>
        <Detail />
      </Layout>
    </>
  );
};

export default DetailPage;
