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
  <div className="flex justify-center">
    <h2 className="text-3xl mb-6">Movies List</h2>
    <ul className="list-none p-0">
      {movies.map((movie, idx) => (
        <li key={idx} className="mb-8 bg-gray-100 p-4 rounded-lg">
          <h3 className="m-0">{movie.title} 
            <span className="text-gray-500 font-normal">({movie.year})</span></h3>
          <div>
            <strong>Actors:</strong> {movie.actors.join(', ')}
            </div>
        </li>
      ))}
    </ul>
  </div>
);

export default MoviesList; 