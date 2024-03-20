import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import shop from "@/lib/data";

interface TileProps {}

export function Tile({}: TileProps) {
  return (
    <>
      {shop.map((tile, id) => (
        <figure className="tile relative" key={id}>
          <Image
            className={cn("tile-img")}
            alt="tile"
            src={"/use2.webp"}
            objectFit="cover"
            fill={true}
          />
          <div className="text-content absolute p-4">
            <h1 className="title">{tile}</h1>
            <p>Discover more</p>
          </div>
        </figure>
      ))}
    </>
  );
}
