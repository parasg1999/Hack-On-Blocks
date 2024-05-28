import localFont from "next/font/local";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import Script from "next/script";

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
    title: "Hack On Blocks",
    description: "Hack On Blocks",
    images: [
      {
        url: "https://hackon.tech/og.png",
        width: 776,
        height: 437,
        alt: "Hack On Blocks",
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
      <Script id="twitter-tracking">
        {`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
      },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
      a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
      twq('config','o5qcw');`}
      </Script>
    </html>
  );
}
