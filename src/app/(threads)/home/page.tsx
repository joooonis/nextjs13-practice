import Image from 'next/image';

export default async function Home() {
  const data = await getData();

  return (
    <div className='flex flex-col items-center justify-between overflow-y-scroll max-h-screen'>
      <div className='mb-2'>
        <Image src={'/threads-logo.png'} width={24} height={24} alt='logo' />
      </div>
      <div className='space-y-4 divide-y divide-gray-500'>
        {data.slice(0, 10).map((post) => (
          <div className='flex space-x-2 pt-4' key={post.id}>
            <div className='mr-2'>
              <div className='rounded-full w-8 h-8 bg-primary-black' />
            </div>
            <div className=''>
              <h2 className='font-semibold text-sm'>{post.title}</h2>
              <p className='text-sm'>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

async function getData(): Promise<Array<Post>> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
