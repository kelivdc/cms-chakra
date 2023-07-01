'use client'
// import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "300",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ChakraProvider>
        {children}
        </ChakraProvider>
        </body>
    </html>
  );
}
