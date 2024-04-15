"use client";

import React, { useState, useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

interface Props {
  children: React.ReactNode;
}

const Shop = ({ children }: Props) => {
  const shopContext = useContext(ShopContext);
  const { collectionTitle, setCollectionTitle } = shopContext;

  const updateTitle = () => setCollectionTitle("Men's Collection");
  return (
    <>
      <h1>{collectionTitle}</h1>
      <button onClick={updateTitle}>Update store name</button>
    </>
  );
};

export default Shop;
