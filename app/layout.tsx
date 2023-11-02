import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Todo App: Server',
  description: 'developed by @thenishantgiri',
};

const links = [
  { href: '/', Label: 'Home' },
  { href: '/docs', Label: 'Docs' },
  { href: '/todos', Label: 'Todos' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul className="flex items-center">
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.Label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
