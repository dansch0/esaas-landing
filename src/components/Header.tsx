import * as React from 'react';
import { MainWrapper } from './MainWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { MainButton } from './MainButton';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
    return (
    <header className='h-[75px] w-full border-b-2 border-zinc-200 fixed bg-white z-[999]'>
        <MainWrapper>
            <div className='flex justify-between h-full'>
                <div className='h-full flex items-center'>
                    <Image src='/images/logo.png' alt='Logo' width={41} height={57} />
                </div>
                <div className='h-full flex items-center gap-8'>
                    <Link href="#inicio" scroll={false} className='text-black font-semibold'>Início</Link>
                    <Link href="#funcionalidades" className='text-black font-semibold'>Funcionalidades</Link>
                    <Link href="#preco" className='text-black font-semibold'>Preço</Link>
                    <Link href="#contato" className='text-black font-semibold'>Contato</Link>
                    <MainButton/>
                    <Link href="#" className='text-black font-semibold'>Entrar</Link>
                </div>
            </div>
            
            
        </MainWrapper>
    </header>
  );
}
