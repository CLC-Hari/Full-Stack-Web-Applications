import { prisma } from '@/lib/prisma';
import AddMovieButton from '@/components/AddMovieButton';
import MovieCard from '@/components/MovieCard';

export default async function MoviesPage() {
  const movies = await prisma.movie.findMany();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Movie List</h1>
          <AddMovieButton />
        </div>
        
        {movies.length === 0 ? (
          <div className="text-center py-12 mt-30">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Movies Found</h2>
              <p className="text-gray-500 mb-6">Start by adding your first movie to the collection.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
