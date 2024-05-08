import Link from 'next/link';
import * as React from 'react';

export interface IMainButton2Props {
}

export function MainButton2 (props: IMainButton2Props) {
  return (
    <Link href={"https://wa.me/15551234567"} className='w-[160px] select-none flex justify-center bg-main-primary-500 text-white px-3 py-2 rounded-full opacity-1 hover:opacity-70 transition-all duration-300'>Conheça agora</Link>
  );
}
