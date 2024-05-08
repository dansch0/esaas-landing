import * as React from 'react';

export interface ISubtitleProps {
    text: string;
    color: string;
}

export function Subtitle (props: ISubtitleProps) {
  return (
    <h2 className={`${props.color} text-center text-3xl mb-20 uppercase font-semibold`}>{props.text}</h2>
  );
}
