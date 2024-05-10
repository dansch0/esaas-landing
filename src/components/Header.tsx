import * as React from 'react';
import { MainWrapper } from './MainWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { MainButton } from './MainButton';
import { HeaderLink } from './HeaderLink';
import { RiMenu3Fill } from 'react-icons/ri';
import Script from 'next/script';
import { useEffect } from 'react';

export interface IHeaderProps {
}

export function Header(props: IHeaderProps) {

    useEffect(() => {
        document.querySelector('#nav-toggle')?.addEventListener('click', () => {
            console.log("aaaaa");
            const classList = document.querySelector('#main-nav')?.classList;

            if(classList?.contains('max-md:hidden'))
            {
                classList.remove('max-md:hidden');
                classList.add('max-md:fixed');
            }
            else
            {
                classList?.remove('max-md:fixed');
                classList?.add('max-md:hidden');
            }
        });
    }, [])

    return (
        <header className='h-[75px] w-full border-b-2 border-zinc-200 fixed bg-white z-[999]'>
            <MainWrapper>
                <div className='flex justify-between h-full'>
                    <div className='h-full flex items-center'>
                        <Image src='/images/logo.png' alt='Logo' width={121} height={57} />
                    </div>
                    <div id="main-nav" className='max-md:hidden max-md:w-full md:h-full max-md:top-[75px] max-md:left-0 flex max-md:flex-col max-md:bg-white items-center gap-8 max-md:gap-4 max-md: py-4 z-[999]'>
                        <HeaderLink href="#inicio" text='Início' />
                        <HeaderLink href="#funcionalidades" text='Funcionalidades' />
                        <HeaderLink href="#preco" text='Preço' />
                        <HeaderLink href="#contato" text='Contato' />
                        <MainButton />
                        <HeaderLink href="#c" text='Entrar' />
                    </div>
                    <div className='block md:hidden'>
                        <button id='nav-toggle' className='h-full flex items-center text-3xl'>
                            <RiMenu3Fill />
                        </button>
                    </div>
                </div>


            </MainWrapper>
        </header>
    );
}
