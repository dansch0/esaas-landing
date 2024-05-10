import * as React from 'react';
import { MainWrapper } from './MainWrapper';
import Image from 'next/image';
import Link from 'next/link';

export interface IFooterProps {
}

export function Footer(props: IFooterProps) {
  return (
    <div className='bg-white w-full border-t-2 border-zinc-200'>
      <MainWrapper>
        <div className='w-full py-8 flex flex-col items-center gap-4'>
          <Image src='/images/logo2.png' alt='Logo' width={73} height={80} />
          <div className='border rounded-lg px-5 py-2'>
            <Link href={"mailto:comercial@esaas.com.br"} className='text-main-primary-500'>comercial@esaas.com.br</Link>
          </div>
          <p>©Todos os direitos reservados.</p>
        </div>
      </MainWrapper>

    </div>
  );
}
