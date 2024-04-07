import { useState, useEffect } from "react";
import createDatabase from "@/lib/createDatabase";
import IndexedDBObjectStore from "@/lib/simpleIndexedDB";
import {
  featuredList,
  skirtsList,
  topsList,
  pantsList,
  gownsList,
} from "./data";

export const addItem = async (dbname, storename, itemObject) => {
  const store = await new IndexedDBObjectStore(dbname, storename);
  itemObject.forEach(async (data) => await store.put(data));
};

const useDatabase = () => {
  const [db, setDb] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const collections = {
    skirts: { keyPath: "id", autoIncrement: false },
    tops: { keyPath: "id", autoIncrement: false },
    pants: { keyPath: "id", autoIncrement: false },
    gowns: { keyPath: "id", autoIncrement: false },
    featured: { keyPath: "id", autoIncrement: false },
    tshirts: { keyPath: "id", autoIncrement: false },
    jackets: { keyPath: "id", autoIncrement: false },
    dressesandjumps: { keyPath: "id", autoIncrement: false },
    shorts: { keyPath: "id", autoIncrement: false },
    blousesandshirts: { keyPath: "id", autoIncrement: false },
    jeans: { keyPath: "id", autoIncrement: false },
    sweatersandcardigands: { keyPath: "id", autoIncrement: false },
    blazers: { keyPath: "id", autoIncrement: false },
    coats: { keyPath: "id", autoIncrement: false },
    leathers: { keyPath: "id", autoIncrement: false },
    pyjamas: { keyPath: "id", autoIncrement: false },
  };

  // create a new database
  const initializeDB = (dbname, collections) => {
    return new Promise((resolve, reject) => {
      createDatabase(dbname, collections)
        .then((newDatabase) => {
          setDb(newDatabase);
          setInitialized(true);

          addItem(dbname, "featured", featuredList);
          addItem(dbname, "tops", topsList);
          addItem(dbname, "skirts", skirtsList);
          addItem(dbname, "pants", pantsList);
          addItem(dbname, "gowns", gownsList);
          resolve(true);
        })
        .catch((err) => reject(err));
    });
  };

  const saveCollectionsNamesInSessionStorage = () => {
    const allStores = JSON.stringify(Object.keys(collections));
    sessionStorage.setItem("db_collections", allStores);
  };

  useEffect(() => {
    initializeDB("GlowreahDB", collections);
    saveCollectionsNamesInSessionStorage();
  }, []);

  return { db, initialized };
};

export default useDatabase;
