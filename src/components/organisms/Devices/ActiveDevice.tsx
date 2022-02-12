import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Draggable from 'react-draggable';
import {RootState} from '../../../redux/store';
import {ISmartDevice} from '../../../interfaces';

import {getBulbService} from '../../../services/getBulbService';
import {getOutletService} from '../../../services/getOutletService';
import {getSensorService} from '../../../services/getSensorService';

import {RenderBulbFields} from '../../molecules/Devices/RenderBulbFields';
import {RenderOutletFields} from "../../molecules/Devices/RenderOutletFields";
import {RenderSensorFields} from "../../molecules/Devices/RenderSensorFields";

export const ActiveDevice = () => {
    const activeDevice: ISmartDevice = useSelector(
        (state: RootState) => state.activeDevice,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('activated');
        if (activeDevice.type === 'bulb') {
            getBulbService().then(bulb => {
                if (bulb !== void 0) {
                    dispatch({type: 'SET_ACTIVE_DEVICE', payload: bulb});
                }
            });
        } else if (activeDevice.type === 'outlet') {
            getOutletService().then(outlet => {
                if (outlet !== void 0) {
                    dispatch({type: 'SET_ACTIVE_DEVICE', payload: outlet});
                }
            });
        } else if (activeDevice.type === 'temperatureSensor') {
            getSensorService().then(sensor => {
                if (sensor !== void 0) {
                    dispatch({type: 'SET_ACTIVE_DEVICE', payload: sensor});
                }
            });
        }
    }, [activeDevice.type]);

    return (
        <Draggable defaultPosition={{x: 0, y: 0}}>
            <div>
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
                <RenderBulbFields/>
                <RenderOutletFields/>
                <RenderSensorFields/>
            </div>
        </Draggable>
    );
};
