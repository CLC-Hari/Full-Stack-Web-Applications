import React from "react";

const Footer = () => {
  return (
  <footer className="bg-gray-900 text-white py-8 px-4 mt-8 text-center">
    <div className="mb-2 text-center">© 2024 MovieDB Inc. All rights reserved.</div>
    <div className="mb-2">Contact: <a href="mailto:info@moviedb.com" className="underline hover:text-gray-300">info@moviedb.com</a> | +1 (555) 123-4567</div>
    <div>123 Movie Lane, Film City, CA 90000</div>
  </footer>
  );
};

export default Footer;