import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center justify-between'>
      <div className='mb-2'>
        <Image src={'/threads-logo.png'} width={24} height={24} alt='logo' />
      </div>
      {children}
    </div>
  );
}
