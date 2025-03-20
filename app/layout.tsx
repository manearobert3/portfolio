import "./globals.css";

import Header from "./components/header";
import { Providers } from "./components/providers";
import { Inter, Playfair_Display, Roboto } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
