import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { Player } from "@lottiefiles/react-lottie-player";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Apex Traders</title>
        <meta
          name="description"
          content="Apextraders- deal site to trade your crypto currencies"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
{/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
<link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="h-[100vh] overflow-x-hidden bg-yellow-200/20">
        <div className="flex flex-col justify-center items-center mt-10 mx-20 md:mx-36">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_ystsffqy.json"
            background="transparent"
            style={{ height: "324px", width: "424px" }}
          ></Player>
          <Button
            className="bg-yellow-500 text-white my-14"
            onClick={() => router.push("/home")}
          >
            Lets Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
