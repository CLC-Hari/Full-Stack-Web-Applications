import React from "react";

const Navbar = () => (
  <nav className="bg-white text-black px-50 py-6 flex justify-between items-center">
    <div className="font-bold text-5xl tracking-widest">IMR</div>
    <div className="flex gap-20">
      <a href="/" className="text-black hover:text-gray-300 transition-colors p-3 nounderline hover:underline">Home</a>
      <a href="/movies" className="text-black hover:text-gray-300 transition-colors p-3 nounderline hover:underline">Movies</a>
      <a href="#contact" className="text-black hover:text-gray-300 transition-colors p-3 nounderline hover:underline">Contact</a>
    </div>
  </nav>
);

export default Navbar;