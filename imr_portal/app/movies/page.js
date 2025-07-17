import { prisma } from '@/lib/prisma';
import AddMovieButton from '@/components/AddMovieButton';
import MovieCard from '@/components/MovieCard';

export default async function MoviesPage() {
  const movies = await prisma.movie.findMany();

  return (
    <div>
      <h1>Movie List</h1>
      <AddMovieButton />
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
