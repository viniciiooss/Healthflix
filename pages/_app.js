import "../styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigateBar from "./components/navbar";
export default function App({ Component, pageProps }) {
  <Head>
    {/* <title>HEALTHFLIX</title> */}
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* <link rel="icon" href="/thirteen.svg" /> */}
  </Head>;
  return (
    <>
      <NavigateBar>
        <Component {...pageProps} />
      </NavigateBar>
    </>
  );
}
