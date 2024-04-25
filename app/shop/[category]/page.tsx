"use client";

import "./shop.css";
import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import Button from "@/app/components/ui/Button";
import { cn } from "@/lib/utils";
import Img from "../../components/ui/card-image";

interface Params {
  category: string;
}

const Shop = ({ category }: Params) => {
  const { collectionTitle, setCollectionTitle } = useContext(ShopContext);
  const { collectionList, setCollectionList } = useContext(ShopContext);

  console.log(category);

  return (
    <>
      {/* <div className="store-title w-full flex justify-center items-center">
        <h1>{collectionTitle}</h1>
      </div>
      <p>{}</p>
      <div className="filters-and-display-settings p-4">
        <Button
          className={cn("filter-btn border border-solid p-4")}
          text={"Filters and Orders"}
        />
      </div>
      <div className="item-container">
        {collectionList.map((item, key) => {
          return (
            <p key={key} className="me">
              {item.name}
            </p>
          );
        })}
      </div> */}
    </>
  );
};

export default Shop;
