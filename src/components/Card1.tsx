import * as React from 'react';

export interface ICard1Props {
    title: string;
    description: string;
}

export function Card1(props: ICard1Props) {
    return (
        <div className="bg-white p-8 rounded-xl transition-all duration-300 select-none hover:scale-105">
            <h3 className='font-semibold mb-4 text-lg'>{props.title}</h3>
            <p className='text-zinc-800'>{props.description}</p>
        </div>
    );
}
