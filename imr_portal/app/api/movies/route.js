import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ObjectId } from 'bson';

export async function POST(req) {
  try {
    const data = await req.json();

    const movie = await prisma.movie.create({
      data: {
        id: new ObjectId().toHexString(),
        title: data.title,
        actors: data.actors,
        year: data.year,
      },
    });

    return NextResponse.json(movie, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
