import * as React from 'react';

export interface ICard1Props {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export function Card1(props: ICard1Props) {
    return (
        <div className="hover:shadow-xl border-2 border-zinc-100 bg-white p-8 rounded-lg transition-all duration-300 select-none hover:scale-105">
            <div className='flex justify-center mb-2 text-4xl'>
                {props.icon}
            </div>
            <h3 className='font-semibold mb-4 text-lg'>{props.title}</h3>
            <p className='text-zinc-800'>{props.description}</p>
        </div>
    );
}
