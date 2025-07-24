import React from "react";
import Link from "next/link";

const Navbar  = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">IMR</h1>
        <div className="flex gap-6 font-medium">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/movies" className="hover:text-gray-300 transition-colors">Movies</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
