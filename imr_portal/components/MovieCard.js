'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function MovieCard({ movie }) {
  const router = useRouter();

  const handleDelete = async () => {
    const ok = confirm(`Delete "${movie.title}"?`);
    if (!ok) return;

    const res = await fetch(`/api/movies/${movie.id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      router.refresh();
    } else {
      alert('Failed to delete movie.');
    }
  };

  return (
    <Card className="flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          {movie.title}{' '}
          <span className="text-gray-500 font-normal text-base">
            ({movie.year})
          </span>
        </h2>
        <p className="mt-2 text-gray-600">
          <span className="font-medium text-gray-700">Actors:</span>{' '}
          {movie.actors.join(', ')}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-3">
        <Link
          href={`/movies/edit/${movie.id}`}
          className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold transition-colors bg-gray-100 hover:bg-gray-200 text-gray-900"
        >
          Edit
        </Link>
        <Button onClick={handleDelete} className="bg-red-600 hover:bg-red-700 focus:ring-red-500">
          Delete
        </Button>
      </div>
    </Card>
  );
}
