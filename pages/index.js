import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../component/Layout/Navbar";
import { Footer } from "../component/Layout/Footer";
// import { Navbar, Footer } from "../component/Layout";
import { Home } from "../component/Pages/home";
import { basicClient } from "../graphql/index";
import { explorePublications, recommendProfiles } from "../graphql/queries";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const response = await basicClient.query(explorePublications).toPromise();
      const posts = response.data.explorePublications.items.map((post) => {
        post.backgroundColor = generateRandomColor();
        return post;
      });
      console.log(posts);
      // setPosts(posts);
      // setLoadingState("loaded");
    } catch (error) {
      console.log({ error });
    }
  }

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
