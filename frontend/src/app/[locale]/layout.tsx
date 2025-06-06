import type { Metadata } from "next";
import '@/app/globals.css';
import { notFound } from "next/navigation";
import {routing} from "../../i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";


export const metadata:Metadata = {
  title: '3-Двери',
  description:'Платформа по поиску жилья'
}
export default async function RootLayout({
  children,
  params,
}:{children:React.ReactNode, params:Promise<{locale: string}>}){
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body >
    <NextIntlClientProvider>
      {children}
    </NextIntlClientProvider>
      </body>
    </html>
  )
}