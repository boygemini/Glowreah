import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Shade from "./shade";
import Button from "./ui/Button";

type Props = {};

const Hero: React.FC = (props: Props) => {
  return (
    <div className={"hero"}>
      <Image
        className={cn("hero-img")}
        src="/use1.webp"
        alt="model"
        fill={true}
        priority={true}
        objectFit={"cover"}
      />
      {/* <Shade /> */}
      <div className="headcap absolute">
        <blockquote>
          <h2>
            &quot;Style is a way to say who you are without having to
            speak&quot;
          </h2>
          <p className="p-4"> - Rachel Zoe</p>
        </blockquote>
      </div>
      {/* <Button text="Shop" name="intro-btn"></Button> */}
    </div>
  );
};

export default Hero;
