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
    <div>
      <h1>Add New Movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Actors (comma separated)"
          value={actors}
          onChange={(e) => setActors(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Release Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}
