import Link from 'next/link';
import * as React from 'react';

export interface IContactItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    contact: string;
    href: string;
}

export function ContactItem(props: IContactItemProps) {
    return (
        <div>
            <div className=''>
                <div className='text-4xl text-white mb-4'>
                    {props.icon}
                </div>
            </div>
            <h3 className='text-white text-lg'>{props.title}</h3>
            <div className='mt-5'>
                <p className='text-gray-300 text-sm mb-2'>{props.description}</p>
                <Link href={props.href} className='text-white text-sm hover:underline'>{props.contact}</Link>
            </div>
        </div>
    );
}
