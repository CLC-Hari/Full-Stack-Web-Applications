'use client';

import Link from 'next/link';

export default function MovieCard({ movie }) {
  const handleDelete = async () => {
    await fetch(`/api/movies/${movie.id}`, {
      method: 'DELETE',
    });
    window.location.reload();
  };

  return (
    <div>
      <h2>{movie.title} ({movie.year})</h2>
      <p>Actors: {movie.actors.join(', ')}</p>
      <Link href={`/movies/edit/${movie.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
