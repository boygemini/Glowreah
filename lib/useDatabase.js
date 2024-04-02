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

  useEffect(() => {
    initializeDB("Glowreah_DB", collections);
  }, []);

  return { db, initialized };
};

export default useDatabase;
