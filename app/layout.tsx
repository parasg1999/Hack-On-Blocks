import localFont from "next/font/local";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

const satoshi = localFont({
  src: [
    {
      path: "./assets/fonts/Satoshi.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const quinqueFive = localFont({
  src: "./assets/fonts/QuinqueFive.otf",
  variable: "--font-quinque",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Hack On Blocks",
  description: "Hack On Blocks",
  openGraph: {
    title: "Hack On Blocks",
    description: "Hack On Blocks",
    siteName: "Hack On Blocks",
    images: [
      {
        url: "https://hackon.tech/og.png",
        width: 2000,
        height: 1000,
        alt: "Hack On Blocks",
      },
    ],
  },
  twitter: {
    title: "Hack This Fall 2024",
    description:
      "Hack This Fall 2024 is a 36 hour in-person hackathon scheduled to happen in Gandhinagar, Gujarat from 9th Feb to 11th Feb 2024! 🧡",
    images: [
      {
        url: "https://hackthisfall.tech/og.png",
        width: 776,
        height: 437,
        alt: "Hack This Fall 2024",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${quinqueFive.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
      <GoogleAnalytics gaId="UA-162071861-1" />
    </html>
  );
}
