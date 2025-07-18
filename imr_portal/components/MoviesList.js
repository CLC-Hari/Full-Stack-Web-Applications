import React from 'react';

const movies = [
  {
    title: 'Inception',
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    year: 2010,
  },
  {
    title: 'The Matrix',
    actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    year: 1999,
  },
  {
    title: 'Interstellar',
    actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    year: 2014,
  },
];

const MoviesList = () => (
  <div style={{ padding: '2rem' }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Movies List</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {movies.map((movie, idx) => (
        <li key={idx} style={{ marginBottom: '2rem', background: '#f4f4f4', padding: '1rem', borderRadius: '8px' }}>
          <h3 style={{ margin: 0 }}>{movie.title} <span style={{ color: '#888', fontWeight: 'normal' }}>({movie.year})</span></h3>
          <div><strong>Actors:</strong> {movie.actors.join(', ')}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default MoviesList; 