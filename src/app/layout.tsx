import type { Metadata } from "next";
import "./globals.css";

const title = "Bharat Verma — Engineering Leader, Platform & Payments";
const description =
  "Engineering leader with 16+ years building platform and payment organisations. Director of Platform Engineering at AssetMark; previously Razorpay, Guidepoint, Acquia and MobiKwik.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bindian0509.github.io"),
  title,
  description,
  keywords: [
    "Bharat Verma",
    "Platform Engineering",
    "Director of Engineering",
    "Payments",
    "Fintech",
    "Distributed Systems",
    "Kubernetes",
    "Go",
    "Java",
  ],
  authors: [{ name: "Bharat Verma" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://bindian0509.github.io",
    siteName: "Bharat Verma",
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title,
    description,
    creator: "@iambharatv",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
