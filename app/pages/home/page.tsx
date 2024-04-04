import React from "react";
import NavBar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import { Tile } from "@/app/components/Tile";
import Slide from "@/app/components/Slide";
import Button from "@/app/components/ui/Button";
import { cn } from "@/lib/utils";

type Props = {};

const Home: React.FC = (props: Props) => {
  const collections = ["Tops", "Pants", "Skirts", "Gowns"];
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
      <div className={cn("banner flex flex-col items-start w-full p-4")}>
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
      <NavBar variant={"bottom"} />
    </div>
  );
};

export default Home;
