import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../component/Layout/Navbar";
import { Footer } from "../component/Layout/Footer";
// import { Navbar, Footer } from "../component/Layout";
import { Home } from "../component/Pages/home";
export default function Index() {
  return (
    <Box>
      <Head>
        <title>Lensed-In</title>
        <meta name="description" content="Lensed-In is web3 job platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home />

      <Footer />
    </Box>
  );
}
