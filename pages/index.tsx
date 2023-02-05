import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Button from "../components/Button";
import Consultants from "../components/Consultants/Consultants";
import Procedure from "../components/HowItWorks/Procedure";
import Navbar from "../components/Navbar";
import SubscriptionPlans from "../components/SubscriptionPlans/SubscriptionPlans";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import ResNavbar from "../components/ResponsiveNavbar";
import Footer from "../components/Footer";
import CryptoTable from "../components/LiveCryptoTable";
import ImageComp from "../components/ImageComp";
import Achievements from "../components/Achievements";
import { notifyInfo, notifySuccess } from "../lib/notifications";
import { Player } from "@lottiefiles/react-lottie-player";

const NAMES = [
  { name: "Jessica Walt", price: 2000 },
  { name: "Joey Anderson", price: 1500 },
  { name: "Walter Jefferson", price: 5000 },
  { name: "Andrew Micheals", price: 12000 },
  { name: "Micheala Palmer", price: 3000 },
];
const Home: NextPage = () => {
  const router = useRouter();

  // NAMES.map((name) => {
  //   setInterval(() => notifyInfo(`Investor ${name.name} just made a successful withdrawal of ${name.price}USD`), 3600)
  // })
  // setInterval(
  //   () =>
  //     notifyInfo(
  //       `Investor Jefferey walter just made a successful deposited of 1300 USD`
  //     ),
  //   36000
  // );
  // setInterval(
  //   () =>
  //     notifySuccess(
  //       `Investor Maxine Adam just made a successful withdrawal of 20000 USD`
  //     ),
  //   10000
  // );

  return (
    <>
      <Head>
        <title>Apex Traders</title>
        <meta
          name="description"
          content="Apextraders- deal site to trade your crypto currencies"
        />
        <link rel="icon" href="/favicon.ico" />
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
      {/* <div className="overflow-hidden">
        <About />
        <CryptoTable />
        <Procedure />
        <SubscriptionPlans />
        <Achievements />
        <Consultants />
        <ImageComp />
        <Footer />
      </div> */}
    </>
  );
};

export default Home;
