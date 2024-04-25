"use client";

import React, { createContext } from "react";
import useDatabase from "../../lib/useDatabase";

const DatabaseContext = createContext({
  db: null,
  initialized: false,
});

const DatabaseProvider = ({ children }) => {
  const { db, initialized } = useDatabase();

  return (
    <DatabaseContext.Provider value={{ db, initialized }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
