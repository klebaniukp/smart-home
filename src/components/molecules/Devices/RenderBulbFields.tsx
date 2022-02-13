import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ISmartBulb } from '../../../interfaces';

export const RenderBulbFields = () => {
    const bulb: ISmartBulb = useSelector(
        (state: RootState) => state.activeDevice,
    );

    return (
        <>
            {bulb.type === 'bulb' ? (
                <>
                    <p className='text-slate-500 font-medium text-xl'>
                        is turned on: {JSON.stringify(bulb.isTurnedOn)}
                    </p>
                    <p className='text-slate-500 font-medium text-xl'>
                        brightness: {bulb.brightness}
                    </p>
                    <p className='text-slate-500 font-medium text-xl'>
                        color: {bulb.color}
                    </p>
                </>
            ) : (
                <></>
            )}
        </>
    );
};
