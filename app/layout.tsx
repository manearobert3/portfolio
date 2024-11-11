import Header from "./components/header";
import { Providers } from "./components/providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
        <Providers>
          <Header />
          <main className="grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
