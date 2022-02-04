import React from 'react';
import Draggable from 'react-draggable';
import { DeviceCard } from './components/molecules/Cards/DeviceCard';

function App() {
    return (
        <>
            <div className='py-2'>
                <DeviceCard
                    deviceType={'bulb'}
                    deviceName={'Bulb 1'}
                    deviceId={'bulb-1'}
                    connectionType={'connected'}
                />
            </div>
            <div className='py-2'>
                <DeviceCard
                    deviceType={'outlet'}
                    deviceName={'Outlet 1'}
                    deviceId={'outlet-1'}
                    connectionType={'poorConnection'}
                />
            </div>
            <div className='py-2'>
                <DeviceCard
                    deviceType={'temperatureSensor'}
                    deviceName={'Sensor 1'}
                    deviceId={'sensor-1'}
                    connectionType={'disconnected'}
                />
            </div>
        </>
    );
}

export default App;
