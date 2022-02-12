import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusButton} from '../Buttons/StatusButton';
import {LargeField} from '../../atoms/Fields/LargeField';
import {MediumField} from '../../atoms/Fields/MediumField';
import {AdjustmentIcon} from '../../atoms/Icons/AdjustmentIcon';
import {BulbIcon} from '../../atoms/Icons/BulbIcon';
import {TemperatureSensorIcon} from '../../atoms/Icons/TemperatureSensorIcon';
import {OutletIcon} from '../../atoms/Icons/OutletIcon';
import {DefaultIcon} from '../../atoms/Icons/DefaultIcon';
import {RootState} from "../../../redux/store";
import {ISmartDevice} from "../../../interfaces";

export const DeviceCard = (props: {
    deviceType: 'bulb' | 'outlet' | 'temperatureSensor';
    deviceName: string;
    deviceId: string;
    connectionState: 'connected' | 'poorConnection' | 'disconnected';
}) => {
    const {deviceType, deviceName, deviceId, connectionState} = props;

    const activeDevice: ISmartDevice = useSelector(
        (state: RootState) => state.activeDevice);

    const dispatch = useDispatch();

    const renderIcon = () => {
        switch (props.deviceType) {
            case 'bulb':
                return <BulbIcon/>;
            case 'outlet':
                return <OutletIcon/>;
            case 'temperatureSensor':
                return <TemperatureSensorIcon/>;
            default:
                return <DefaultIcon/>;
        }
    };

    const setActiveDevice = () => {
        if (activeDevice.id !== deviceId)
            dispatch({
                type: 'SET_ACTIVE_DEVICE',
                payload: {
                    type: deviceType,
                    id: deviceId,
                    name: deviceName,
                    connectionState: connectionState,
                },
            });
    };

    return (
        <div
            className={`py-8 px-8 w-5/12 mx-auto bg-white rounded-xl shadow-lg 
            space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 
            flex justify-between`}>
            {renderIcon()}

            <div className='w-60 '>
                <LargeField type={props.deviceType} name={props.deviceName}/>
                <MediumField name={props.deviceId}/>
            </div>
            <div className='flex flex-row w-40 justify-center'>
                <StatusButton type={props.connectionState}/>
            </div>
            <button
                className='hover:bg-gray-200 rounded px-2 h-9'
                onClick={() => setActiveDevice()}>
                <AdjustmentIcon/>
            </button>
        </div>
    );
};
