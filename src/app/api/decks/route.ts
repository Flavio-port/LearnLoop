import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();
    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    const deck = await prisma.deck.create({
      data: { name },
    });
    return NextResponse.json(deck);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create deck' }, { status: 500 });
  }
}