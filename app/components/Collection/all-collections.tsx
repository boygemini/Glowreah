"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { getCollectionNamesForHumans } from "@/lib/data";
import Button from "@/app/components/ui/Button";
import Shade from "../shade";

type Props = {
  // seeAll: boolean;
};

function AllCollections({}: Props) {
  const [seeAll, setSeeAll] = useState(false);

  const firstThereCollections = [];
  let allCollections = getCollectionNamesForHumans();
  console.log(allCollections);
  let i = 6;
  for (i; i < 9; i++) {
    firstThereCollections.push(allCollections[i]);
  }

  return (
    <div className={cn("our-collection flex flex-col gap-4 p-4")}>
      {firstThereCollections.map((collection, key) => {
        return (
          <div
            key={key}
            style={{ backgroundImage: `url(${collection.image})` }}
            className="card-group p-4 w-full min-w-28 relative"
          >
            <p className="coll-text text-center">{collection.name}</p>
          </div>
        );
      })}
      <Drawer>
        <DrawerTrigger className={cn("w-full")}>
          <div className="card-group p-4 w-full min-w-28 relative">
            <p className="coll-text text-center">See all our collections</p>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button text={"Click Me"} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default AllCollections;
