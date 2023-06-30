import "@/styles/globals.css";

import { UserProvider } from "@/context/authContext";
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
