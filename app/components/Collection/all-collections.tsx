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

  let selectedFewOtherForShow = getCollectionNamesForHumans([
    "dressesandjumps",
    "shorts",
    "jackets",
  ]);

  let entireCollection = getCollectionNamesForHumans();

  selectedFewOtherForShow.map((m) => console.log(m));

  return (
    <div className={cn("our-collection flex flex-col gap-4 p-4")}>
      {selectedFewOtherForShow.map((collection, key) => {
        return (
          <div
            key={key}
            style={{ backgroundImage: `url(${collection.image})` }}
            className="card-group p-4 w-full min-w-28 relative"
          >
            <p className="coll-text text-center text-2xl">{collection.name}</p>
          </div>
        );
      })}
      <Drawer>
        <DrawerTrigger className={cn("w-full")}>
          <div
            style={{
              backgroundImage: `url('/spant.png') `,
            }}
            className="card-group all-collection p-4 w-full min-w-28 relative"
          >
            <Shade className={"all-c-shade"}>
              <p className="coll-text col-ent text-2xl">
                See our entire collection
              </p>
            </Shade>
          </div>
        </DrawerTrigger>
        <DrawerContent className={cn("our-collection-modal bg-white")}>
          <DrawerHeader>
            <DrawerTitle className={cn("text-lg font-semibold")}>
              Our Collections
            </DrawerTitle>
          </DrawerHeader>
          <div className="w-full overflow-y-scroll flex flex-col gap-4 p-4 col-list">
            {entireCollection.map((collection, key) => {
              return (
                <div
                  key={key}
                  style={{ backgroundImage: `url(${collection.image})` }}
                  className="card-group p-4 w-full min-w-28 relative"
                >
                  <p className="coll-text rm-underline text-center text-2xl">
                    {collection.name}
                  </p>
                </div>
              );
            })}
          </div>
          <DrawerFooter className="drawer-footer">
            <DrawerClose className={cn("w-full")}>
              <Button text={"Cool, thanks!"} className={"bottom-close-btn"} />
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default AllCollections;
