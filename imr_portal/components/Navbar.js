import React from "react";

const Navbar  = () => {
  return (
    <div>
      <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
        <h1>IMR</h1>
        <div>
          <a href="/" className="text-white hover:text-gray-300 transition-colors">Home</a>
          <a href="/movies" className="text-white hover:text-gray-300 transition-colors">Movies</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
