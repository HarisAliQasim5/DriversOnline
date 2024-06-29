import { DarkModeProvider } from '../components/ContextFiles/DarkModeContext';
import Layout from "@/components/layoutScreen/Layout";
import "@/styles/globals.css";
import { LanguageProvider } from "../components/ContextFiles/LanguageContext";
import { AuthProvider } from "../context/authContext";
import GlobalState from "@/context";
export default function App({ Component, pageProps }) {
  return (
<GlobalState>
    <AuthProvider>
      <DarkModeProvider>
        <LanguageProvider>
          {/* <Layout> */}
            <Component {...pageProps} />
          {/* </Layout> */}
        </LanguageProvider>
      </DarkModeProvider>
      </AuthProvider>
      </GlobalState>
  );
}




