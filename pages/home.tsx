import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Button from "../components/Button";
import Consultants from "../components/Consultants/Consultants";
import Procedure from "../components/HowItWorks/Procedure";
import Navbar from "../components/Navbar";
import SubscriptionPlans from "../components/SubscriptionPlans/SubscriptionPlans";
import { useRouter } from "next/router";
import ResNavbar from "../components/ResponsiveNavbar";
import Footer from "../components/Footer";
import CryptoTable from "../components/LiveCryptoTable";
import ImageComp from "../components/ImageComp";
import Achievements from "../components/Achievements";
import { notifyInfo, notifySuccess } from "../lib/notifications";

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="h-[100vh] overflow-x-hidden bg-[url('/assets/showcase.jpg')] bg-cover bg-no-repeat">
        <Navbar />
        <ResNavbar />
        <div className="flex flex-col justify-center mt-32 md:mt-52 mx-8 md:mx-36">
          <h1 className="text-yellow-600 text-5xl font-bold">
            APEXTRADER- TRADING EFFICIENTLY, SECURELY AND RELIABLE
          </h1>
          <div>
            <Button
              className="bg-yellow-500 text-white mt-4"
              onClick={() => router.push("/auth/signup")}
            >
              JOIN US
            </Button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <About />
        <CryptoTable />
        <Procedure />
        <SubscriptionPlans />
        <Achievements />
        <Consultants />
        <ImageComp />
        <Footer />
      </div>
    </>
  );
};

export default Home;
