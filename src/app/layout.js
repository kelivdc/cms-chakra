// import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "300",
  display: 'swap',
  subsets: ["latin"],
});

export const metadata = {
  title: "CMS",
  description: "CMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
