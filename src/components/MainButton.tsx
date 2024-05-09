import Link from 'next/link';
import * as React from 'react';
import { FaWhatsapp } from "react-icons/fa";

export interface IMainButtonProps {
}

export function MainButton (props: IMainButtonProps) {
  return (
    <Link href={"https://wa.me/15551234567"} className='w-[160px] select-none font-semibold flex justify-center items-center gap-1 bg-green-600 text-white px-3 py-2 rounded-full opacity-1 hover:opacity-70 transition-all duration-300'>
      
      Conheça
      <FaWhatsapp/>
    </Link>
  );
}
