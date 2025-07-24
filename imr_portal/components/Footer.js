import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 text-center space-y-2">
        <div>© 2024 MovieDB Inc. All rights reserved.</div>
        <div>
          Contact:{" "}
          <a href="mailto:info@moviedb.com" className="underline hover:text-white">
            info@moviedb.com
          </a>{" "}
          | +1 (555) 123-4567
        </div>
        <div>123 Movie Lane, Film City, CA 90000</div>
      </div>
    </footer>
  );
};

export default Footer;
