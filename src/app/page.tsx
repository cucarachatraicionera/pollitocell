
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6 text-center px-4">
      <Image
        src="/logo.png"
        alt="Logo Pollito Cell"
        width={220}
        height={220}
        priority
      />
      <h1 className="text-4xl font-bold text-yellow-800">¡Próximamente!</h1>
      <p className="text-lg max-w-md text-yellow-900">
        Ya compramos el servidor y el dominio. Muy pronto conocerás Pollito Cell, lo mejor en tecnología móvil.
      </p>
    </main>
  );
}
