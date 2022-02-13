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

export const ActiveDevice = (props: {
    defaultPosition: { x: number; y: number };
}) => {
    const activeDevice: ISmartDevice = useSelector(
        (state: RootState) => state.activeDevice,
    );

    const dispatch = useDispatch();

    const [currentInterval, setCurrentInterval] = useState<
        NodeJS.Timer | undefined
    >(undefined);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (activeDevice.type === 'bulb') {
            getBulbService().then(bulb => {
                if (bulb !== void 0) {
                    dispatch({ type: 'SET_ACTIVE_DEVICE', payload: bulb });
                }
            });
            const id = activeDevice.id;
            if (id === 'bulb') {
                if (currentInterval) clearInterval(currentInterval);
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
                if (currentInterval) clearInterval(currentInterval);
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
                if (currentInterval) clearInterval(currentInterval);
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

    const trackPos = (data: any) => {
        setPosition({ x: data.x, y: data.y });
        console.log(position);
    };

    const saveDataToLS = () => {
        localStorage.setItem('position', JSON.stringify(position));
        console.log(localStorage.getItem('position'));
    };

    // const setStartingPosition = () => {
    //     const positionLS = localStorage.getItem('position');
    //     if (positionLS !== null) setPosition(JSON.parse(positionLS));
    //     else setPosition({ x: 0, y: 0 });

    //     console.log([position, positionLS]);
    // };

    return (
        <Draggable
            defaultPosition={props.defaultPosition}
            onDrag={(e, data) => trackPos(data)}
            onStop={() => saveDataToLS()}>
            <div className='w-1/4 drag-wrapper'>
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
