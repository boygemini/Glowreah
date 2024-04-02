"use client";

import React, { createContext, useState, useEffect } from "react";
import useDatabase from "./useDatabase";

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
