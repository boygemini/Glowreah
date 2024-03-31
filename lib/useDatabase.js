// useDatabase.js
import { useState, useEffect } from "react";
import createDatabase from "@/lib/createDatabase";
import IndexedDBObjectStore from "@/lib/simplesIndexedDB";

const useDatabase = () => {
  const [db, setDb] = useState(null);
  const [initialized, setInitialized] = useState(false);

  if (!db) {
    (async () => {
      const db = await createDatabase("Glowreah_DB", {
        skirts: { keyPath: "id", autoIncrement: true },
        tops: { keyPath: "tops", autoIncrement: true },
        pants: { keyPath: "pants", autoIncrement: true },
        gowns: { keyPath: "gowns", autoIncrement: true },
      });
      const store = await new IndexedDBObjectStore("Glowreah_DB", "tops");
      store.put("test", { name: "A GOD DAMN CROP TOP" });
      console.log(db);
      setDb(db);
      setInitialized(true);
    })();
  }

  return { db, initialized };
};

export default useDatabase;
