import type { AppProps } from "next/app";
import React, { useEffect } from "react";

import "../globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
