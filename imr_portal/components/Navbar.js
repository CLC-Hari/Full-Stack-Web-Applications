import React from "react";

const Navbar  = () => {
  return (
  <nav className="bg-gray-900 text-white px-20 py-5 flex justify-between items-center">
    <h1 className="text-3xl font-bold">IMR</h1>
    <div className="flex gap-7 font-bold">
      <a href="/" className="text-white hover:text-gray-300 transition-colors hover:underline">Home</a>
      <a href="/movies" className="text-white hover:text-gray-300 transition-colors hover:underline">Movies</a>
    </div>
  </nav>
  );
};

export default Navbar;
