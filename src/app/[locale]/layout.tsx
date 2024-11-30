import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";
import Providers from "@/GlobalRedux/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Created by Mahdi Rostami",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`min-h-screen bg-gradient-to-r from-blue-950 to-blue-700 ${
          locale === "en" ? "font-Varela" : "font-IranSans"
        } box-border`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
