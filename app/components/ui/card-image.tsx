import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  variant: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  customeClassName: string;
};

export default function Img({
  customeClassName,
  variant,
  src,
  alt,
  width,
  height,
}: Props) {
  switch (variant) {
    case "fill-bg":
      return (
        <Image
          src={src}
          alt="image"
          width={width}
          height={height}
          layout="fill"
          className={cn(`${customeClassName}`)}
        />
      );
    case "default":
      return <Image src={src} alt="image" width={width} height={height} />;
  }
}
