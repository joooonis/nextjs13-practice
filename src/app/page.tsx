'use client';

import { forwardRef } from 'react';

import { useForm } from 'react-hook-form';

interface MyInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

const MyInput = forwardRef<HTMLInputElement, MyInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <label className='flex'>
        <span>{label}</span>
        <input ref={ref} {...rest} />
      </label>
    );
  }
);

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyInput label='😀' {...register('좋아요')} />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'
          type='submit'>
          Submit
        </button>
      </form>
    </main>
  );
}
