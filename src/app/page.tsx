import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <Link href={'/home'}>
        <Image
          src={'/threads-logo-title.png'}
          width={180}
          height={180}
          quality={100}
          alt='logo'
        />
      </Link>
    </main>
  );
}
