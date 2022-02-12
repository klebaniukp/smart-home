import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {ISmartOutlet} from '../../../interfaces';

export const RenderOutletFields = () => {
    const outlet: ISmartOutlet = useSelector(
        (state: RootState) => state.activeDevice,
    );

    return (
        <>
            {outlet.type === 'outlet' ? (
                <>
                    <p className='text-slate-500 font-medium text-xl'>
                        on/off status: {JSON.stringify(outlet.isTurnedOn)}
                    </p>
                    <p className='text-slate-500 font-medium text-xl'>
                        power consumption: {outlet.powerConsumption}
                    </p>
                </>
            ) : (
                <></>
            )}
        </>
    );
};
