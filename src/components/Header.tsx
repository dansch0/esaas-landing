import * as React from 'react';
import { MainWrapper } from './MainWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { MainButton } from './MainButton';
import { HeaderLink } from './HeaderLink';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
    return (
    <header className='h-[75px] w-full border-b-2 border-zinc-200 fixed bg-white z-[999]'>
        <MainWrapper>
            <div className='flex justify-between h-full'>
                <div className='h-full flex items-center'>
                    <Image src='/images/logo.png' alt='Logo' width={121} height={57} />
                </div>
                <div className='h-full flex items-center gap-8'>
                    <HeaderLink href="#inicio" text='Início'/>
                    <HeaderLink href="#funcionalidades" text='Funcionalidades'/>
                    <HeaderLink href="#preco" text='Preço'/>
                    <HeaderLink href="#contato" text='Contato'/>
                    <MainButton/>
                    <HeaderLink href="#c" text='Entrar'/>
                </div>
            </div>
            
            
        </MainWrapper>
    </header>
  );
}
