import React from 'react';

export const PoorConnectionStatusButton = (props: { value: string }) => {
    return (
        <button className='px-4 py-1 text-sm text-orange-500 font-semibold rounded-full border border-orange-200 hover:text-white hover:bg-orange-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'>
            {props.value}
        </button>
    );
};
