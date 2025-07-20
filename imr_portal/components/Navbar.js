import React from "react";

const Navbar  = () => {
  return (
  <nav className="bg-gray-900 text-white px-20 py-5 flex justify-between items-center">
    <h1 className="text-3xl font-bold">IMR</h1>
    <div className="flex gap-6">
      <a href="/" className="text-white hover:text-gray-300 transition-colors">Home</a>
      <a href="/movies" className="text-white hover:text-gray-300 transition-colors">Movies</a>
      <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
    </div>
  </nav>
  );
};

export default Navbar;
