import * as React from 'react';
import { LuCheckCircle } from "react-icons/lu";

export interface ICard2Props {
    title: string;
}

export function Card2(props: ICard2Props) {
    return (
        <div className="flex items-center select-none justify-between bg-white px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105">
            <h3 className='text-base text-black'>{props.title}</h3>
            <LuCheckCircle className='text-lg'/>
        </div>
    );
}
