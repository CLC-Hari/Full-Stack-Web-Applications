import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import './globals.css'

export const metadata = {
  title: 'IMR Movie Portal',
  description: 'Manage movies with IMR Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}