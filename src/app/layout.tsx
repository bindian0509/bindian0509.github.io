import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bharat Verma | Senior Engineering Manager",
  description: "Senior Engineering Manager at Razorpay with 15+ years of experience in backend engineering, distributed systems, and fintech platforms.",
  keywords: ["Bharat Verma", "Engineering Manager", "Razorpay", "Backend Engineer", "Distributed Systems", "Fintech"],
  authors: [{ name: "Bharat Verma" }],
  openGraph: {
    title: "Bharat Verma | Senior Engineering Manager",
    description: "Senior Engineering Manager at Razorpay with 15+ years of experience",
    url: "https://bindian0509.github.io",
    siteName: "Bharat Verma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Verma | Senior Engineering Manager",
    description: "Senior Engineering Manager at Razorpay with 15+ years of experience",
    creator: "@iambharatv",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
