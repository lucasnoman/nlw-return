import { CircleNotch } from 'phosphor-react';

export function Loading() {
  return (
    <div className='flex items-center justify-center overflow-hidden'>
      <CircleNotch weight='bold' className='w-6 h-5 animate-spin' />
    </div>
  );
}
