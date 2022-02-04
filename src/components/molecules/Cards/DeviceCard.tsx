import React from 'react';
import { StatusButton } from '../Buttons/StatusButton';
import { LargeField } from '../../atoms/Fields/LargeField';
import { MediumField } from '../../atoms/Fields/MediumField';
import { AdjustmentIcon } from '../../atoms/Icons/AdjustmentIcon';
import { BulbIcon } from '../../atoms/Icons/BulbIcon';
import { TemperatureSensorIcon } from '../../atoms/Icons/TemperatureSensorIcon';
import { OutletIcon } from '../../atoms/Icons/OutletIcon';
import { DefaultIcon } from '../../atoms/Icons/DefaultIcon';

export const DeviceCard = (props: {
    deviceType: 'bulb' | 'outlet' | 'temperatureSensor';
    deviceName: string;
    deviceId: string;
    connectionType: 'connected' | 'poorConnection' | 'disconnected';
}) => {
    const renderIcon = () => {
        switch (props.deviceType) {
            case 'bulb':
                return <BulbIcon />;
            case 'outlet':
                return <OutletIcon />;
            case 'temperatureSensor':
                return <TemperatureSensorIcon />;
            default:
                return <DefaultIcon />;
        }
    };

    return (
        <div className='py-8 px-8 w-4/12 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
            {renderIcon()}

            <div className='w-60'>
                <LargeField type={props.deviceType} name={props.deviceName} />
                <MediumField name={props.deviceId} />
            </div>
            <StatusButton type={props.connectionType} />
            <button className='hover:bg-gray-200 rounded'>
                <AdjustmentIcon />
            </button>
        </div>
    );
};
