"use client";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundImage: 'url("/home.jpg")',
    minHeight: "100vh",
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Foxies</title>
        <meta name="description" content="Foxies is an adorable, decentralized and idle-staking game." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        
        <div className={"stage"}>
          <div className={"top-dark-transition"}></div>
          <div className={"bottom-dark-transition"}></div>
        </div>
        
        <div style={backgroundStyle} className="brightness-50 ">
          {/*  <div className="bg-blue-300"> */}
        </div>
        
        <div className="absolute z-50 w-full h-full top-0 overflow-hidden">
          
          <Header />
          <Image
              src="/aleph.png"
              width={300}
              height={60}
              alt="logo"
              className="mx-2  absolute bottom-10 right-10"
            />
          <div className={`absolute bottom-2/3 left-2/3 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Image
              src="/stars.png"
              width={150}
              height={60}
              alt="logo"
              className="mx-10 px-10"
            />
          </div>
          <div className="w-full h-full flex items-center justify-center flex-col ">
            <Image
              src="/Foxies.png"
              width={600}
              height={600}
              alt="logo"
              className="mx-10 px-10"
            />
            <h1 className="font-VT323 text-white text-2xl xl:text-4xl relative bottom-10 sm:bottom-14 text-center">
              First idle-stacking Play-to-earn on Aleph Zero
            </h1>
            <Link href="/mint">
            <button className="relative bottom-10 border-[4px] border-black bg-white rounded-full text-4xl sm:text-6xl text-black px-12 flex items-center">
              <span className="relative font-VT323">Start</span>
              <span className="absolute font-mono	 top-1/2 right-4 transform -translate-y-1/2 text-4xl font-bold">
                &gt;
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
