import React from "react";
import NavBar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import { Tile } from "@/app/components/Tile";

type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <div className="content">
      <NavBar />
      <Hero />
      <Tile />
      <NavBar variant={"bottom"} />
    </div>
  );
};

export default Home;
