import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Shade from "./shade";
import Button from "./ui/Button";
import Slide from "./Slide";

type Props = {};

const Hero: React.FC = (props: Props) => {
  return (
    <div className={"hero"}>
      <div className="headcap absolute"></div>
      <Slide />
    </div>
  );
};

export default Hero;
