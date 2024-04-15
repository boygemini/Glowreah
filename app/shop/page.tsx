"use client";

import React, { useState, useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

interface Props {
  children: React.ReactNode;
}

const Shop = ({ children }: Props) => {
  const shopContext = useContext(ShopContext);
  const { collectionTitle } = shopContext;
  return (
    <>
      <h1>{collectionTitle}</h1>
    </>
  );
};

export default Shop;
