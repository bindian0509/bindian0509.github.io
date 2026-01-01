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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <style>{`
          body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          .font-mono, pre, code {
            font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
          }
        `}</style>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
