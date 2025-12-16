import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Projeto Fênix",
  description: "Uma interface de operador completamente nova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceGrotesk.variable} antialiased`}>
        {" "}
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
