import "bootstrap/dist/css/bootstrap.min.css"; // llama a Bootstrap aquí
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { NextIntlProvider } from "next-intl";

function MyApp({ Component, pageProps }) {
  // importación de Bootstrap en Next.js
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  //console.log(pageProps)

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Navbar />
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
