import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { ISmartDevice } from './interfaces/index';
import { activeDeviceService } from './services/activeDeviceService';
import { RenderDevices } from './components/organisms/Devices/RenderDevices';
import { ActiveDevice } from './components/organisms/Devices/ActiveDevice';

function App() {
    const dispatch = useDispatch();

    const devices: ISmartDevice[] = useSelector(
        (state: RootState) => state.devices,
    );

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/devices')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'SET_DEVICES', payload: data.devices });
            });

        console.log(activeDeviceService('outlet'));
    }, []);

    return (
        <>
            {devices.length > 0 ? (
                <RenderDevices />
            ) : (
                <div>No devices found</div>
            )}
            <ActiveDevice name='Outlet' />
        </>
    );
}

export default App;
