export default async function Page({ params }: { params: any }) {
  const post = await getPostById(params);
  return (
    <div>
      <h1 className='text-xl font-bold'>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

async function getPostById({ id }: { id: number }): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
