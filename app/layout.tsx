import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";


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
        </Providers>
      </body>
    </html>
  );
}
