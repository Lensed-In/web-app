import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Footer } from "../component/Layout/Footer";
import { Navbar } from "../component/Layout/Navbar";
import { JobsPage } from "../component/Pages/jobs";

export default function Jobs() {
  return (
    <Box>
      <Head>
        <title>Lensed-In</title>
        <meta name="description" content="Lensed-In is web3 job platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <JobsPage />

      <Footer />
    </Box>
  );
}
