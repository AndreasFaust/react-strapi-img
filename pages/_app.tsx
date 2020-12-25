import React from "react";
import Nav from "../utils/Nav";
import "./css/reset.css";
import "./css/index.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Nav route={router.route} />
      <Component {...pageProps} key={router.route} />
    </>
  );
}

export default MyApp;
