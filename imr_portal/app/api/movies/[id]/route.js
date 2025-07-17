import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_, context) {
  const { params } = context;
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!movie) {
      return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
    }

    return NextResponse.json(movie);
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, context) {
  const { params } = context;
  try {
    const data = await req.json();

    const movie = await prisma.movie.update({
      where: {
        id: params.id,
      },
      data: {
        title: data.title,
        actors: data.actors,
        year: data.year,
      },
    });

    return NextResponse.json(movie);
  } catch (error) {
    console.error('PUT Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(_, context) {
  const params = await context.params;
  try {
    await prisma.movie.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.error('DELETE Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
