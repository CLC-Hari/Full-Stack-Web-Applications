import Link from 'next/link';

export default function AddMovieButton() {
  return (
    <Link href="/movies/add">
      <button>Add New Movie</button>
    </Link>
  );
}