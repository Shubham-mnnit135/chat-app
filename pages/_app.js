import "@/styles/globals.css";

import { UserProvider } from "@/context/authContext";
import { ChatContextPorvider } from "@/context/chatContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <link rel="icon" href="/chat-icon2.png" />
        <title>Baat-Cheet</title>
      </Head>
      <ChatContextPorvider>
          <Component {...pageProps} />
      </ChatContextPorvider>
    </UserProvider>
  );
}
