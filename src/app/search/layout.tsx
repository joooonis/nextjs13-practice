import Navigation from '../ui/Navigation';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative flex flex-col bg-white mx-auto items-center min-h-screen max-w-[415px] pb-16'>
      <main className='w-full px-4 pt-4 '>{children}</main>
      <Navigation />
    </div>
  );
}
