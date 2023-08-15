import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between'>
      <div>
        <Image src={'/threads-logo.png'} width={24} height={24} alt='logo' />
      </div>
    </div>
  );
}
