import { FirstContextProvider } from "@/components/utils/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <FirstContextProvider>
      <Component {...pageProps} />
    </FirstContextProvider>
  );
}
