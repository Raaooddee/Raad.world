import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import { SignatureLoading } from "@/components/SignatureLoading";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raad AlShaikh Hasan | Projects & Portfolio",
  description:
    "Comp Sci and Data Science student at UW–Madison. Projects: GoodNeighbor, SmartTransit, Campus Navigator.",
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=document.documentElement.getAttribute('data-theme');if(t){return;}var s=localStorage.getItem('theme');if(s){document.documentElement.setAttribute('data-theme',s);return;}if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} ${dancingScript.variable} font-sans antialiased`}
      >
        <SignatureLoading />
        {children}
      </body>
    </html>
  );
}
