"use client";
import React, { useState, createContext } from "react";

const ShopContext = createContext({
  collectionTitle: null,
  collectionList: [],
});

const ShopProvider = ({ children }) => {
  const [collectionTitle, setCollectionTitle] = useState(null);
  const [collectionList, setCollectionList] = useState([]);

  return <ShopContext.Provider>{children}</ShopContext.Provider>;
};

export default ShopProvider;
