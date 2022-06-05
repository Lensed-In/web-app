import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Footer } from "../component/Layout/Footer";
import { Navbar } from "../component/Layout/Navbar";

export default function Profile() {
  return (
    <Box>
      <Head>
        <title>Lensed-In</title>
        <meta name="description" content="Lensed-In is web3 job platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* <Landpage /> */}

      <Footer />
    </Box>
  );
}
