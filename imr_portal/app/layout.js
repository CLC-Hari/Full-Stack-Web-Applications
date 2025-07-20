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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}