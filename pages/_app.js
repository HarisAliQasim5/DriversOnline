import { useState, useEffect } from 'react';
import { DarkModeProvider } from '../components/ContextFiles/DarkModeContext';
import Layout from "@/components/layoutScreen/Layout";
import "@/styles/globals.css";
import { LanguageProvider } from "../components/ContextFiles/LanguageContext";
import { AuthProvider } from "../context/authContext";
import GlobalState from "@/context";
import LangugaePopup from '@/components/LangugaePopup';

export default function App({ Component, pageProps }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const language = localStorage.getItem('language');
    if (!language) {
      setShowPopup(true);
    }
  }, []);

  return (
    <GlobalState>
      <AuthProvider>
        <DarkModeProvider>
          <LanguageProvider>
            {/* <Layout> */}
            {showPopup && <LangugaePopup onClose={() => setShowPopup(false)} />}
            <Component {...pageProps} />
            {/* </Layout> */}
          </LanguageProvider>
        </DarkModeProvider>
      </AuthProvider>
    </GlobalState>
  );
}
