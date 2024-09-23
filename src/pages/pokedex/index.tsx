import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import Template from "@/components/atoms/template";
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
