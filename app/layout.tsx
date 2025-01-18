import type { Metadata } from "next";
import localFont from 'next/font/local'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

import "./globals.css";

export const metadata: Metadata = {
  title: "Wishlist by Forever",
  description: "Amazing wishlist",
};

const montserrat = localFont({
    src: [
        {
            path: './fonts/MontserratAlternates-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        }
    ],
    variable: '--font-montserrat',
})

const raleway = localFont({
    src: [
        {
            path: './fonts/Raleway-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/Raleway-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './fonts/Raleway-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/Raleway-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/Raleway-Light.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: './fonts/Raleway-ExtraLight.ttf',
            weight: '100',
            style: 'normal'
        },
    ],
    variable: '--font-raleway',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${raleway.variable} ${montserrat.variable}`}>
        <Header/>
        {children}
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}
