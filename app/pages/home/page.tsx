import React from "react";
import NavBar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import { Tile } from "@/app/components/Tile";
import HorizontalSlider from "@/app/components/HorizontalSlider";

type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <div className="content">
      <NavBar />
      <Hero />
      <Tile />
      <HorizontalSlider />
      {/* <NavBar variant={"bottom"} /> */}
    </div>
  );
};

export default Home;
