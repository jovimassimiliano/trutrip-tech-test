import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/store/providers/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Open Census",
  description: "Citizens census application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <ReactQueryProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
