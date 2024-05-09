import * as React from 'react';
import { BsCheckLg } from "react-icons/bs";

export interface IBenefitItemProps {
    title: string;
    children: React.ReactNode;
}

export function BenefitItem (props: IBenefitItemProps) {
  return (
    <div className='mt-5'>
        <p className='font-semibold text-sm'><BsCheckLg className='inline mr-1'/>{props.title}</p>
        <p className='text-sm text-zinc-700 text-justify'>{props.children}</p>
    </div>
  );
}
