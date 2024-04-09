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
    dressesandjumps: { keyPath: "id", autoIncrement: false },
    blousesandshirts: { keyPath: "id", autoIncrement: false },
    skirts: { keyPath: "id", autoIncrement: false },
    pants: { keyPath: "id", autoIncrement: false },
    gowns: { keyPath: "id", autoIncrement: false },
    featured: { keyPath: "id", autoIncrement: false },
    tops: { keyPath: "id", autoIncrement: false },
    tshirts: { keyPath: "id", autoIncrement: false },
    jackets: { keyPath: "id", autoIncrement: false },
    shorts: { keyPath: "id", autoIncrement: false },
    jeans: { keyPath: "id", autoIncrement: false },
    party: { keyPath: "id", autoIncrement: false },
    office: { keyPath: "id", autoIncrement: false },
  };

  let allStores = JSON.stringify(Object.keys(collections));
  sessionStorage.setItem("db_collections", allStores);

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

  useEffect(() => {
    initializeDB("GlowreahDB", collections);
  }, []);

  return { db, initialized };
};

export default useDatabase;
