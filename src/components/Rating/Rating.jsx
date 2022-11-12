import React from 'react';

export const Rating = ({value, max=5, className=0}) => {
    return (
        <div className={ className }>
            {Array.apply(0, Array(value)).map(function (x, i) {
                return '❤';
            })}
        </div>
    )
}
