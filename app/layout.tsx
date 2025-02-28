import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "Job Finder",
  description: "Find your dream job easily!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={` antialiased`}
      >
        <Providers>
          {children}
          <ToastContainer position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
