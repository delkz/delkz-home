import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delkz",
  description: "Mid-Level Front-End Developer with over 4 years of experience in e-commerce and blogs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${robotoMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header/>
          {children}
          <Footer/>
        </NextIntlClientProvider >
      </body>
    </html>
  );
}
