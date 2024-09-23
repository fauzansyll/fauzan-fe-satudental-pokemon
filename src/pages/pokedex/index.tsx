import React from "react";
import Layout from "@/components/organism/layout";
import Pokedex from "@/components/pages/pokedex";
import Head from "next/head";

const PokedexPage = () => {
  return (
    <>
      <Head>
        <title>Pokemon Pokedex</title>
      </Head>
      <Layout>
        <Pokedex />
      </Layout>
    </>
  );
};

export default PokedexPage;
