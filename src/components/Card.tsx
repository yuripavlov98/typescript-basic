import React, { PropsWithChildren, FC, useState } from 'react';
export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<PropsWithChildren<CardProps>> = 
    ({
        width, 
        height, 
        variant,
        onClick, 
        children
    }) => {
    const [state, setState] = useState(0);
    return (
        <div style={{width, height, 
            border: variant === CardVariant.outlined ? '1px solid blue' : 'none',
            background: variant === CardVariant.primary ? 'grey' : ''
        }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;