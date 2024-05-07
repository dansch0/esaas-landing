import * as React from 'react';

export interface IMainWrapperProps {
    children?: React.ReactNode;
}

export function MainWrapper (props: IMainWrapperProps) {
  return (
    <div className='max-w-[1200px] h-full m-auto'>
      {props.children}
    </div>
  );
}
