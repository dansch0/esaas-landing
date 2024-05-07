import Link from 'next/link';
import * as React from 'react';

export interface IMainButtonProps {
}

export function MainButton (props: IMainButtonProps) {
  return (
    <Link href={"https://wa.me/15551234567"} className='w-[160px] select-none font-semibold flex justify-center text-main-primary-500 px-3 py-2 border-2 border-main-primary-500 rounded-full'>Conheça agora</Link>
  );
}
