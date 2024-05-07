import Image from 'next/image';
import * as React from 'react';

export interface ISideImageProps {
    imgName: string;
    description: string;
    alt: string;
    title: string;
    invert?: boolean;
}

export function SideImage (props: ISideImageProps) {
  return (
    <div className={'flex h-[500px] ' + (props.invert ? 'flex-row-reverse' : '')}>
      <div className='w-1/2 flex flex-col justify-center items-center'>
        <h3 className='text-2xl font-semibold text-main-primary-500 w-10/12 text-center'>{props.title}</h3>
        <p className='text-zinc-500 w-10/12 text-center'>{props.description}</p>
      </div>
      <div className={`w-1/2 overflow-hidden`}>
        <div className={`w-full h-full ${props.imgName} bg-center bg-cover transition-all duration-300 ease-in hover:scale-105 `}>

        </div>
        
      </div>
    </div>
  );
}
