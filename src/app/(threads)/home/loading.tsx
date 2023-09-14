import Skeleton from '@/components/atoms/Skeleton';

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-between'>
      <Skeleton />
    </div>
  );
}
