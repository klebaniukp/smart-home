import React from "react";

export const DisconnectedStatusButton = (props: { value: string }) => {
    return (
        <button className='px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2'>
            {props.value}
        </button>
    );
};