const Skeleton: React.FC = () => (
  <div className='max-w-sm animate-pulse'>
    <div className='h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4'></div>
    <div className='h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4'></div>
    <div className='h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4'></div>
    <div className='h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-4'></div>
    <div className='h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-4'></div>
    <div className='h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
  </div>
);

export default Skeleton;
