import React, { useState } from "react";
import NavBar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import { Tile } from "@/app/components/Tile";
import Slide from "@/app/components/Slide";
import Button from "@/app/components/ui/Button";
import { cn } from "@/lib/utils";
import Img from "@/app/components/ui/card-image";
import AllCollections from "../components/Collection/all-collections";

type Props = {};
let other = [
  "Dresses and Jumpsuits",
  "T-Shirts",
  "Shorts",
  "Blouses and Shirts",
  "Jeans",
  "Sweaters and Cardigans",
  "Jackets",
  "Blazers",
  "Coats",
  "Leathers",
  "Pyjamas",
];

const Home: React.FC = (props: Props) => {
  const collections = ["Tops", "Pants", "Skirts", "Gowns"];
  console.log(props);
  return (
    <div className="content">
      <NavBar />
      <Hero />
      {collections.map((title, index) => (
        <Tile
          title={title}
          id={index.toFixed()}
          key={index}
          imgSrc={"/use2.webp"}
          imgAlt="just an image"
        />
      ))}
      {/* <Slide /> */}
      <div className={cn("banner flex flex-col items-start w-full p-4 py-7")}>
        <h1 className={cn("banner-title font-extrabold text-4xl leading-10")}>
          Have a design you adore and want to bring to life?
        </h1>
        {/* <h2 className={cn("text-2xl leading-8 font-semibold")}>lets havit!</h2> */}
        <p className={cn("my-4 font-medium text-lg")}>
          Contact us, and we'll skillfully replicate or customize it to
          perfection, just for you.
        </p>
        <Button text={"How does it work?"} name={"banner-btn"} />
      </div>
      <div className={cn("showcase relative mx-auto my-7")}>
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
            See more of our collections
          </p>
        </div>
      </div>
      <AllCollections />

      {/* <div className="other-collections flex shrink flex-wrap gap-1 p-4">
        {other.map((group, id) => {
          return (
            <div key={id} className="card-group p-6 max-w-56 min-w-28 relative">
              <p className="group-item text-center bottom-5 left-5">{group}</p>
            </div>
          );
        })}
      </div> */}
      {/* <NavBar variant={"bottom"} /> */}
    </div>
  );
};

export default Home;
