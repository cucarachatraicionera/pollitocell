
import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pollito Cell | Coming Soon',
  description: 'Servidor y dominio listos. Muy pronto en línea.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex h-screen items-center justify-center bg-yellow-50">
        {children}
      </body>
    </html>
  );
}
