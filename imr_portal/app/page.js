import React from "react";


const HomePage = () => {
  return (
      <main className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Welcome to IMR Portal</h1>
        <a
          href="/movies"
          className="mt-4 inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-colors bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go to Movie List
        </a>
      </main>
  );
}

export default HomePage;
