import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solearn</title>
        <meta
          name="description"
          content="Learning and Onboarding platform for Web3 to create bite sized quizzes"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
