import React from 'react';
import { DeviceCard } from '../../molecules/Cards/DeviceCard';
import { ISmartDevice } from '../../../interfaces/index';

export const RenderDevices = (props: { devices: ISmartDevice[] }) => {
    const { devices } = props;

    const renderDevices = () => {
        if (devices.length > 0) {
            const element = devices.map(device => {
                return (
                    <div key={device.id} className='py-2'>
                        <DeviceCard
                            deviceType={device.type}
                            deviceName={device.name}
                            deviceId={device.id}
                            connectionType={device.connectionState}
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
