import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Smile } from "lucide-react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dad Jokes of the Day",
  description: "Get a daily dose of dad jokes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col gap-4 p-4 md:p-8 min-h-screen max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-x-hidden">
          <header className="flex items-center justify-between pt-3 pb-6">
            <h1 className="text-2xl font-bold flex items-center">
              <Smile className="mx-2 w-6 h-6" /> Dad Jokes of the Day
            </h1>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
