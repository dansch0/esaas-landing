import Link from 'next/link';
import * as React from 'react';

export interface IHeaderLinkProps {
    href: string;
    text: string;
}

export function HeaderLink (props: IHeaderLinkProps) {
  return (
    <Link href={props.href} className='text-black font-semibold group transition duration-300'>{props.text}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
    </Link>

    

  );
}
