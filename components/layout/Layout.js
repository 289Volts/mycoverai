import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Space_Grotesk } from "next/font/google";

export const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export default function Layout({ children }) {
	return (
    <>
      <Header font={`${space.className} font-space`} />
      <main className={`${space.className} font-space`}>{children}</main>
      <Footer font={`${space.className} font-space`} />
    </>
  );
}
