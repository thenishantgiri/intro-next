import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/todos', request.url));
};

// match these route
export const config = {
  matcher: ['/dashboard'],
};
