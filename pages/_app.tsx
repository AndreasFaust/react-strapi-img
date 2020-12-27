import React from "react";
import Nav from "../utils/Nav";
import { ImageProvider } from "../src";
import "./css/reset.css";
import "./css/index.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Nav route={router.route} />
      <ImageProvider
        prefix={process.env.productionPath}
        sizes="100vw"
        // style={`border: 10px solid red;`}
        // onLoad={(event) => console.log(event.target)}
      >
        <Component {...pageProps} key={router.route} />
      </ImageProvider>
    </>
  );
}

export default MyApp;
