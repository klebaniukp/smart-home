import React from 'react';
import { DeviceCard } from '../../molecules/Cards/DeviceCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ISmartDevice } from '../../../interfaces/index';

export const RenderDevices = () => {
    const devices: ISmartDevice[] = useSelector(
        (state: RootState) => state.devices,
    );

    const renderDevices = () => {
        if (devices.length > 0) {
            const element = devices.map(device => {
                return (
                    <div key={device.id} className='py-2'>
                        <DeviceCard
                            deviceType={device.type}
                            deviceName={device.name}
                            deviceId={device.id}
                            connectionState={device.connectionState}
                        />
                    </div>
                );
            });
            return element;
        } else {
            return <div>No devices found</div>;
        }
    };

    return <>{renderDevices()}</>;
};
