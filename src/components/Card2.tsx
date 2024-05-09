import * as React from 'react';
import { LuCheckCircle } from "react-icons/lu";

export interface ICard2Props {
    title: string;
    icon: React.ReactNode;
    description: string;
}

export function Card2(props: ICard2Props) {
    return (
        <div className="flex flex-col items-left select-none bg-transparent border border-gray-700 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105">
            <div className='text-4xl text-main-primary-500 mb-3'>
                {props.icon}
            </div>
            <h3 className='text-lg text-gray-100 font-semibold uppercase'>{props.title}</h3>
            <p className='text-sm text-gray-300'>{props.description}</p>
            <p className='mt-3 text-sm text-gray-400'><span className='font-semibold text-main-primary-500'>R$ 0,00</span> (incluso na licença)</p>
        </div>
    );
}
