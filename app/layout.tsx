import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Script from "next/script";

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
      <head>

    <Script
      id="google-tag-manager"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GTM || ''}');`,
      }}
    />

      </head>
      <body
        className={`${robotoMono.variable} antialiased`}
      >
      <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM || ''}`}
      height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <NextIntlClientProvider messages={messages}>
          <Header/>
          {children}
          <Footer/>
        </NextIntlClientProvider >
      </body>
    </html>
  );
}
