import React from 'react';

export const ActiveStatusButton = (props: {
    value: string;
    // connectionState: 'connected' | 'disconnected' | 'poorConnection';
}) => {
    return (
        <p className='px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2'>
            {props.value}
        </p>
    );
};
