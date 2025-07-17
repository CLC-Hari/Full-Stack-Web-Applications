'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function EditMoviePage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [actors, setActors] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`/api/movies/${id}`);
      const data = await res.json();
      setTitle(data.title);
      setActors(data.actors.join(', '));
      setYear(data.year);
    };
    fetchMovie();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/movies/${id}`, {
      method: 'PUT',
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
      <h1>Edit Movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={actors}
          onChange={(e) => setActors(e.target.value)}
          placeholder="Actors (comma separated)"
          required
        />
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Release Year"
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
