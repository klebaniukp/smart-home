import React from 'react';

export const LargeField = (props: { type: string; name: string }) => {
    return (
        <>
            {props.type === 'temperatureSensor' ? (
                <p className='text-lg text-black font-semibold'>
                    sensor: {props.name}
                </p>
            ) : (
                <p className='text-lg text-black font-semibold'>
                    {props.type}: {props.name}
                </p>
            )}
        </>
    );
};
