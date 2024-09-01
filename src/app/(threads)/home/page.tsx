import Link from 'next/link';

export default async function Page() {
  const data = await getPost();
  return (
    <ul className='space-y-4 divide-y divide-gray-500'>
      {data.slice(0, 10).map(post => (
        <Link href={`/home/${post.id}`} key={post.id}>
          <li className='flex space-x-2 pt-4'>
            <div className='mr-2'>
              <div className='rounded-full w-8 h-8 bg-primary-black' />
            </div>
            <div className=''>
              <h2 className='font-semibold text-sm'>{post.title}</h2>
              <p className='text-sm'>{post.body}</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

async function getPost(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
