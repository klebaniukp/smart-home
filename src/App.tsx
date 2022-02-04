import React, { useEffect, useState } from 'react';
// import Draggable from 'react-draggable';
import { RenderDevices } from './components/organisms/Devices/RenderDevices';
import { ISmartDevice } from './interfaces/index';

function App() {
    const [devices, setDevices] = useState<ISmartDevice[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/devices')
            .then(res => res.json())
            .then(data => {
                setDevices(data.devices);
                console.log(data.devices);
                console.log(devices);
            });
    }, []);

    return (
        <>
            {devices.length > 0 ? (
                <RenderDevices devices={devices} />
            ) : (
                <div>No devices found</div>
            )}
        </>
    );
}

export default App;
