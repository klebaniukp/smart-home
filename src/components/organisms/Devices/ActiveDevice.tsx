import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Draggable from 'react-draggable';
import { RootState } from '../../../redux/store';
import { ISmartDevice } from '../../../interfaces';
import { MediumField } from '../../atoms/Fields/MediumField';

export const ActiveDevice = (props: { name: string }) => {
    const windowHeight = window.innerHeight;

    const activeDevice: ISmartDevice = useSelector(
        (state: RootState) => state.activeDevice,
    );

    console.log(windowHeight);

    return (
        <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <div>
                <p className='text-slate-500 font-medium text-xl'>
                    {props.name}
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
            </div>
        </Draggable>
    );
};
