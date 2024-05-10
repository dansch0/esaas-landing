import Image from 'next/image';
import * as React from 'react';

export interface ISideImageProps {
    imgName: string;
    alt: string;
    title: string;
    invert?: boolean;
    children: React.ReactNode;
}

export function SideImage (props: ISideImageProps) {
  return (
    <div className={'flex max-md:flex-col max-md:items-center md:h-[500px] ' + (props.invert ? 'flex-row-reverse' : '')}>
      <div className='md:w-1/2 flex flex-col justify-center items-center'>
        <h3 className='mb-4 text-3xl font-semibold text-main-primary-500 w-11/12 text-center '>{props.title}</h3>
        <p className={`text-zinc-500 w-10/12 text-center`}>{props.children}</p>
      </div>
      <div className={`w-1/2 overflow-hidden`}>
        <div className={`w-full h-full ${props.imgName} bg-center bg-cover transition-all duration-300 ease-in hover:scale-105 `}>

        </div>
        
      </div>
    </div>
  );
}
