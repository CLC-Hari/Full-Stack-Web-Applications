import Link from 'next/link';

export default function AddMovieButton() {
  return (
    <div className="flex justify-center">
      <Link href="/movies/add">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
          Add New Movie
        </button>
      </Link>
    </div>
  );
}