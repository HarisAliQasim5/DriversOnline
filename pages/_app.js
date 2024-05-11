import { DarkModeProvider } from '../components/ContextFiles/DarkModeContext';
import Layout from "@/components/layoutScreen/Layout";
import "@/styles/globals.css";
import { LanguageProvider } from "../components/ContextFiles/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
      <DarkModeProvider>
        <LanguageProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LanguageProvider>
      </DarkModeProvider>
  );
}
