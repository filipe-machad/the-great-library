import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import {
  Cormorant_Garamond,
  Crimson_Text,
  Spectral,
  Italianno,
} from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const crimson = Crimson_Text({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
  display: "swap",
});

/** Corpo narrativo (após o ✦): Spectral, 300/400 — tom de livro clássico. */
const spectralNarrative = Spectral({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
  variable: "--font-spectral-narrative",
  display: "swap",
});

/** Só na capitular do primeiro parágrafo (`.narrative-chapter-prose .drop-cap`): traço caligráfico. */
const italiannoInitial = Italianno({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-italianno-initial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Grande Biblioteca",
  description:
    "Onde a memória vive eterna e o esquecido encontra voz. Repositório canônico do universo narrativo.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${crimson.variable} ${spectralNarrative.variable} ${italiannoInitial.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
