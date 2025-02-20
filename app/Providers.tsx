'use client'

import { useEffect, useState } from "react";
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { store } from "@/store";

const Providers = ({children}: {children: React.ReactNode}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null; 
    }
  
    return (
      <Provider store={store}>

      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
      </Provider>
    );
}

export default Providers