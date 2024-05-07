import * as React from 'react';

export interface IContactItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    contact: string;
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
                <p className='text-white text-sm'>{props.contact}</p>
            </div>
        </div>
    );
}
