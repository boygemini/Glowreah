import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Shade from "./shade";
import Button from "./ui/Button";
import HeroChildren from "./HeroChildren";

type Props = {};

const Hero: React.FC = (props: Props) => {
  return (
    <div className={"hero"}>
      <div className="headcap absolute"></div>
      <HeroChildren />
    </div>
  );
};

export default Hero;
