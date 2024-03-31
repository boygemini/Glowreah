"use client";

import { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TileProps {}

export function Tile({}: TileProps) {
  return (
    <>
      {/* {allCollections.map((tile, id) => (
        <figure className="tile relative" key={id}>
          <Image
            className={cn("tile-img")}
            alt="tile"
            src={"/use2.webp"}
            layout="fill"
          />
          <div className="text-content absolute bottom-0 p-4 py-7 bg-yellow-500">
            <h1 className="title font-semibold text-3xl">{tile}</h1>
            <p className="text-1xl underline underline-offset-8">
              Discover more
            </p>
          </div>
        </figure>
      ))} */}
    </>
  );
}
