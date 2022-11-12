import React from 'react';

export const Rating = ({value, className=0}) => {
    return (
        <div className={ className }>
            {Array.apply(0, Array(5)).map(function (x, i) {
                return (i < value)?'★':'✰';
            })}
        </div>
    )
}
