import React, { useState } from "react";
import NavBar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import { Tile } from "@/app/components/Tile";
import HeroChildren from "@/app/components/HeroChildren";
import Button from "@/app/components/ui/Button";
import { cn } from "@/lib/utils";
import Img from "@/app/components/ui/card-image";
import AllCollections from "../components/Collection/all-collections";
import { getCollectionNamesForHumans } from "@/lib/data";

type Props = {};

const Home: React.FC = (props: Props) => {
  const collections = getCollectionNamesForHumans([
    "tops",
    "skirts",
    "pants",
    "gowns",
    "party",
    "office",
  ]);

  return (
    <div className="content">
      <Hero />
      {collections.map((title, index) => (
        <Tile
          title={title.name}
          id={index.toFixed()}
          key={index}
          imgSrc={title.image}
          imgAlt="just an image"
        />
      ))}
      <AllCollections />
      <div
        className={cn(
          "banner flex flex-col items-start w-full p-4 py-14 bg-gray-50"
        )}
      >
        <h1 className={cn("banner-title font-extrabold text-4xl leading-10")}>
          Have a design you adore and want to bring to life?
        </h1>
        {/* <h2 className={cn("text-2xl leading-8 font-semibold")}>lets havit!</h2> */}
        <p className={cn("my-4 font-medium text-lg")}>
          Contact us, and we'll skillfully replicate or customize it to
          perfection, just for you.
        </p>
        <Button text={"How does it work?"} className={"banner-btn"} />
      </div>
      <div className={cn("showcase relative")}>
        <Img
          variant={"fill-bg"}
          src="/use3.webp"
          customeClassName={"showcase-image"}
        />
        <div className="text absolute top-2/4 left-2/4 -translate-x-2/4 ">
          <h1 className={cn("text-3xl font-semibold text-white")}>#SHOWCASE</h1>
          <p
            className={cn("text-white font-bold underline-offset-8 underline")}
          >
            Check us out!
          </p>
        </div>
      </div>
      {/* <NavBar variant={"bottom"} /> */}
    </div>
  );
};

export default Home;
