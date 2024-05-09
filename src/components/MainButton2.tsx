import Link from 'next/link';
import * as React from 'react';
import { FaWhatsapp } from "react-icons/fa";

export interface IMainButton2Props {
}

export function MainButton2 (props: IMainButton2Props) {
  return (
    <Link href={"https://wa.me/15551234567"} className='w-[160px] select-none font-semibold flex justify-center items-center gap-1 text-green-600 px-3 py-2 border-2 border-green-600 rounded-full opacity-1 hover:opacity-70 transition-all duration-300'>
      Conheça
      <FaWhatsapp/>
      </Link>
  );
}
