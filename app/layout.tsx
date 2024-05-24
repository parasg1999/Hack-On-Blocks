import localFont from "next/font/local";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

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

export const metadata = {
  title: "Hack On Blocks",
  description: "Hack On Blocks",
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
      <GoogleAnalytics gaId="G-YWT7D5FTDY" />
    </html>
  );
}
