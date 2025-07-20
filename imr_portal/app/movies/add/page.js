'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddMoviePage() {
  const [title, setTitle] = useState('');
  const [actors, setActors] = useState('');
  const [year, setYear] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('/api/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        actors: actors.split(',').map((actor) => actor.trim()),
        year: parseInt(year),
      }),
    });

    router.push('/movies');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Add New Movie</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              placeholder="Enter movie title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Actors</label>
            <input
              type="text"
              placeholder="Enter actors (comma separated)"
              value={actors}
              onChange={(e) => setActors(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Release Year</label>
            <input
              type="number"
              placeholder="Enter release year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl mt-6"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
}
