import { NextResponse } from 'next/server';
import db from '@/utils/db';

export const GET = async (request: Request, { params }: any) => {
  const todos = await db.todo.findUnique({ where: { id: params.id } });
  return NextResponse.json({ data: todos });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const todo = await db.todo.create({ data });
  return NextResponse.json({ message: todo });
};

export const DELETE = async (request: Request, { params }: any) => {
  const todo = await db.todo.delete({ where: { id: params.id } });
  return NextResponse.json({ data: todo });
};
