import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {ISmartTemperatureSensor} from '../../../interfaces';

export const RenderSensorFields = () => {
    const sensor: ISmartTemperatureSensor = useSelector(
        (state: RootState) => state.activeDevice,
    );

    return (
        <>
            {sensor.type === 'temperatureSensor' ? (
                <>
                    <p className='text-slate-500 font-medium text-xl'>
                        temperature: {sensor.temperature}
                    </p>
                </>
            ) : (
                <></>
            )}
        </>
    );
};
