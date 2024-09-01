import Navigation from '../ui/Navigation';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative flex flex-col bg-primary-white mx-auto items-center scrollbar-hide overflow-y-scroll max-h-[100dvh] max-w-[415px]'>
      <main className='w-full px-4 pt-4 mb-20'>{children}</main>
      <Navigation />
    </div>
  );
}
