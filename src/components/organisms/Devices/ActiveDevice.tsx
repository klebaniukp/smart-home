import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Draggable from 'react-draggable';
import { RootState } from '../../../redux/store';
import { ISmartDevice } from '../../../interfaces';

import { activeDeviceService } from '../../../services/activeDeviceService';
import { getBulbService } from '../../../services/getBulbService';
import { getOutletService } from '../../../services/getOutletService';
import { getSensorService } from '../../../services/getSensorService';

import { RenderBulbFields } from '../../molecules/Devices/RenderBulbFields';
import { RenderOutletFields } from '../../molecules/Devices/RenderOutletFields';
import { RenderSensorFields } from '../../molecules/Devices/RenderSensorFields';

export const ActiveDevice = () => {
    const activeDevice: ISmartDevice = useSelector(
        (state: RootState) => state.activeDevice,
    );

    const dispatch = useDispatch();

    const [currentInterval, setCurrentInterval] = useState<any>();

    useEffect(() => {
        console.log('activated');
        if (activeDevice.type === 'bulb') {
            getBulbService().then(bulb => {
                if (bulb !== void 0) {
                    dispatch({ type: 'SET_ACTIVE_DEVICE', payload: bulb });
                }
            });
            const id = activeDevice.id;
            if (id === 'bulb') {
                clearInterval(currentInterval);
                setCurrentInterval(
                    setInterval(() => {
                        dispatch({
                            type: 'SET_ACTIVE_DEVICE',
                            payload: activeDeviceService(id),
                        });
                    }, 1000),
                );
            }
        } else if (activeDevice.type === 'outlet') {
            getOutletService().then(outlet => {
                if (outlet !== void 0) {
                    dispatch({ type: 'SET_ACTIVE_DEVICE', payload: outlet });
                }
            });
            const id = activeDevice.id;
            if (id === 'outlet') {
                clearInterval(currentInterval);
                setCurrentInterval(
                    setInterval(() => {
                        dispatch({
                            type: 'SET_ACTIVE_DEVICE',
                            payload: activeDeviceService(id),
                        });
                    }, 1000),
                );
            }
        } else if (activeDevice.type === 'temperatureSensor') {
            getSensorService().then(sensor => {
                if (sensor !== void 0) {
                    dispatch({ type: 'SET_ACTIVE_DEVICE', payload: sensor });
                }
            });
            const id = activeDevice.id;
            if (id === 'temperatureSensor') {
                clearInterval(currentInterval);

                setCurrentInterval(
                    setInterval(() => {
                        dispatch({
                            type: 'SET_ACTIVE_DEVICE',
                            payload: activeDeviceService(id),
                        });
                    }, 1000),
                );
            }
        }
    }, [activeDevice.type]);

    return (
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <div className='w-1/4'>
                <p className='text-slate-500 font-medium text-xl'>
                    {activeDevice.name}
                </p>
                <p className='text-slate-500 font-medium text-lg'>
                    type: {activeDevice.type}
                </p>
                <p className='text-slate-500 font-medium text-lg'>
                    id: {activeDevice.id}
                </p>
                <p className='text-slate-500 font-medium text-lg'>
                    name: {activeDevice.name}
                </p>
                <p className='text-slate-500 font-medium text-lg'>
                    connection: {activeDevice.connectionState}
                </p>
                <RenderBulbFields />
                <RenderOutletFields />
                <RenderSensorFields />
            </div>
        </Draggable>
    );
};
