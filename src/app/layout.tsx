import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import GlobalContextProvider from "@/context/GlobalContextProvider";
import { Toaster } from "sonner";
import { APP_DATA } from "@/constant/appData";

const spaceGrotest = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${APP_DATA.APP_NAME} | Free Custom Icon Maker & AI Logo Designer`,
  description: `${APP_DATA.APP_NAME} is a free Ai powerd logo maker.
  Create a beautiful logo in seconds. No design skills needed. `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotest.className} antialiased`}>
        <GlobalContextProvider>
          <Toaster richColors position="top-right" />

          <main className="h-full min-h-screen">{children}</main>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
