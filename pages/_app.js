import "@/styles/globals.css";

import { UserProvider } from "@/context/authContext";
import { ChatContextPorvider } from "@/context/chatContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChatContextPorvider>
          <Component {...pageProps} />
      </ChatContextPorvider>
    </UserProvider>
  );
}
