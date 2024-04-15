"use client";

import { createContext, useContext } from "react";

interface itemObject {
  id: string;
  name: string;
  category: string;
  description: string;
  images: Array<string>;
}

export type ShopContent = {
  collectionTitle: string;
  collectionList: Array<object>;
  setCollectionTitle: (title: string) => void;
  setCollectionList: (list: Array<itemObject>) => void;
};

export const ShopContext = createContext<ShopContent>({
  collectionList: [],
  collectionTitle: "",
  setCollectionList: () => {},
  setCollectionTitle: () => {},
});
