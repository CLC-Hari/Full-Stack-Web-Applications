import React from "react";


const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-black">Welcome to IMR Portal</h1>
      <a href="/movies" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">Go to Movie List</a>
    </main>
  );
}

export default HomePage;
